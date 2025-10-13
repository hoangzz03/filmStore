import React, { useState, useEffect } from 'react';
import ItemCard from '../../components/ItemCard';
import { getAllProduct } from './utils/productManage.utils';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    desc: string;
    quantity: number;
}

const productManage = () => {

    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllProduct();
                setData(result);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="min-h-screen flex flex-col p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
            <div className="flex justify-end mb-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
            </div>
            <table className="min-w-full bg-white border ">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 border">ID</th>
                        <th className="py-2 px-4 border">Name</th>
                        <th className="py-2 px-4 border">Image</th>
                        <th className="py-2 px-4 border">Desc</th>
                        <th className="py-2 px-4 border">Price</th>
                        <th className="py-2 px-4 border">Quantity</th>
                        <th className="py-2 px-4 border">ProductCategoryId</th>
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
                            data.map((item) => <ItemCard data={item} key={item.id} />)
                        ) : (
                            <p className="text-center col-span-3 text-gray-500">
                                Không có sản phẩm nào
                            </p>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default productManage;
