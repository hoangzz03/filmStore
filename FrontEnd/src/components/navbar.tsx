
import React, { useEffect, useState } from 'react';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CgMenu } from 'react-icons/cg';
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { toggleSidebar } from '../redux/sidebarSlice';
import { AuthState } from '../types';
import { checkLogin, logout } from '../pages/Auth/utils/login.utils';

const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
    const [auth, setAuth] = useState<AuthState>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await checkLogin();
                setAuth(data);
            } catch (error) {
                console.error("Failed to check login status:", error);
            }
        };
        fetchData();
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            setAuth(undefined);
        } catch (error) {
            console.error("Failed to logout:", error);
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);

        if (window.location.pathname.includes('/products')) {
            const currentParams = new URLSearchParams(searchParams.toString());
            if (value.trim()) {
                currentParams.set('search', value);
            } else {
                currentParams.delete('search');
            }
            navigate(`/products?${currentParams.toString()}`);
        }
        else if (value.trim()) {
            navigate(`/products?search=${encodeURIComponent(value.trim())}`);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!window.location.pathname.includes('/products')) {
            navigate(`/products${searchValue.trim() ? `?search=${encodeURIComponent(searchValue.trim())}` : ''}`);
        }
    };

    return (
        <nav className="w-full h-16 bg-[#317db4] fixed top-0 left-0 shadow-md z-50">
            <div className="container h-full mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <button
                        onClick={() => dispatch(toggleSidebar())}
                        className="text-white hover:text-gray-200 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <CgMenu className="text-2xl" />
                    </button>

                    <Link to="/" className="flex items-center">
                        <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="/Rollei-7-1.webp"
                            alt="Logo"
                        />
                    </Link>
                </div>

                <div className="flex-1 max-w-2xl mx-4">
                    <form onSubmit={handleSearch} className="relative w-full">
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            value={searchValue}
                            onChange={handleSearchChange}
                            className="w-full py-2 px-4 pr-10 rounded-lg bg-white/10 text-white placeholder-gray-300 
                                      border border-transparent focus:border-white/30 focus:outline-none transition-all"
                        />
                        <button
                            type="submit"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                        >
                        </button>
                    </form>
                </div>

                <div className="flex items-center gap-6">
                    <Link to="/cart" className="relative group">
                        <div className="p-1.5 text-white hover:text-gray-200 transition-colors">
                            <LiaShoppingBagSolid className="text-2xl" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white w-5 h-5 
                                           flex items-center justify-center rounded-full font-medium">3</span>
                        </div>
                    </Link>

                    {auth?._id ? (
                        <div className='flex items-center'>
                            <Link to="/profile" className="text-white hover:text-gray-200 transition-colors">
                                <img src={auth?.avatar} alt="avt" className='w-[40px] h-[40px] rounded-[50%]' />
                            </Link>
                            <button onClick={handleLogout} className="text-white hover:text-gray-200 transition-colors ml-4">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="text-white hover:text-gray-200 transition-colors">
                            <FaUserCircle className="text-2xl" />
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;