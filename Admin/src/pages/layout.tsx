import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <div className="h-[90px]">
                <Navbar />
            </div>
            <section>
                <Outlet />
            </section>
        </div>
    )
}

export default Layout
