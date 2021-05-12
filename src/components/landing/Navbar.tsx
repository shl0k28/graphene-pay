import React from 'react'
import { NavLink } from 'react-router-dom'

interface INavbar {
    header: string;
}

const Navbar: React.FC = () => {
    return(
        <nav className="border-b bg-white px-8 py-4 flex items-center justify-between lg:px-16">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
            </style>
            <div style={{fontFamily:"'Inconsolata', sans-serif"}}>
                <h1 className="flex text-indigo-600 text-2xl lg:text-3xl tracking-wider font-bold ">
                    {/* <img src={logo} alt="" className="h-12 w-12"/> */}
                    cryptify <span className="text-xs mt-4 text-gray-900">[βeta]</span>
                </h1>
            </div>
            <div className="flex items-center space-x-4  w-full justify-end">
                {/* <GiHamburgerMenu className="text-xl lg:hidden text-gray-900"/> */}
                <NavLink to='/dashboard' type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get Started
                </NavLink>
                <NavLink to='/test' type="button" className="py-2 px-4  bg-gray-800 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Test Demo
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar