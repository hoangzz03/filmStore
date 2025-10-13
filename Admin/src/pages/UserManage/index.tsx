import React, { useState, useEffect } from 'react';
import ItemUser from '../../components/ItemUser';
import { getAllUser } from './utils/userManage.utils';
interface User {
    id: number;
    username: string;
    address: string;
    email: string;
    phone: string;
    password: string;
    roleId: number;
}
const userManage = () => {
    const itemsPerPage = 6;
    const totalItems = 20; // Giả định có 20 sản phẩm, bạn có thể thay bằng dữ liệu thực tế
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);

    // Xử lý khi chuyển trang
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllUser();
                setData(result);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu người dùng:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
            <div className="flex justify-end mb-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
            </div>
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 border">ID</th>
                        <th className="py-2 px-4 border">Username</th>
                        <th className="py-2 px-4 border">Address</th>
                        <th className="py-2 px-4 border">Email</th>
                        <th className="py-2 px-4 border">Phone</th>
                        <th className="py-2 px-4 border">Password</th>
                        <th className="py-2 px-4 border">RoleId</th>
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td className="text-center text-gray-500 text-lg">Đang tải dữ liệu...</td>
                        </tr>
                    ) : (
                        data.length > 0 ? (
                            data.map((item) => <ItemUser data={item} key={item.id} />)
                        ) : (
                            <p className="text-center col-span-3 text-gray-500">
                                Không có sản phẩm nào
                            </p>
                        )
                    )}
                </tbody>
            </table>

            {/* Phân trang */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 mx-1 border rounded disabled:opacity-50"
                >
                    Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => goToPage(i + 1)}
                        className={`px-3 py-1 mx-1 border rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : ''}`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 mx-1 border rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default userManage;
