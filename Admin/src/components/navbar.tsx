import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
    const location = useLocation();

    // Hàm kiểm tra xem đường dẫn hiện tại có trùng với item không
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="w-full h-[90px] bg-[#317db4] p-4 fixed z-1000 flex">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-lg font-bold">
                    <h1 className='text-3xl'><Link to='/admin'>Admin Dashboard</Link></h1>
                </div>

                {/* Navigation */}
                <div className='w-[40%] flex items-center justify-between'>
                    <ul className='w-full flex justify-between text-white items-center'>
                        {[
                            { path: "/proceeds", label: "Thống kê doanh thu" },
                            { path: "/productmanage", label: "Quản lý sản phẩm" },
                            { path: "/usermanage", label: "Quản lý người dùng" }
                        ].map(({ path, label }) => (
                            <li key={path}>
                                <Link 
                                    to={path} 
                                    className={`cursor-pointer px-4 py-2 rounded-lg transition ${
                                        isActive(path) ? "bg-white text-[#317db4]" : "text-white"
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}

                        {/* Icon user */}
                        <li>
                            <Link to="/login" className="text-white">
                                <FaUserCircle className={`text-4xl transition ${
                                    isActive("/login") ? "text-gray-300" : "text-white"
                                }`} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
