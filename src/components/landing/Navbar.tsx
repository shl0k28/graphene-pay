import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/cryptify-logo.png'

interface INavbar {
    header: string;
}

const Navbar: React.FC<INavbar> = ({
    header
}) => {
    return(
        <nav className="bg-white px-8 py-4 flex items-center justify-between lg:px-16">
            <div style={{fontFamily:"'Raleway', sans-serif"}}>
                <h1 className="flex items-center text-indigo-600 text-2xl lg:text-3xl tracking-wider font-bold ">
                    {/* <img src={logo} alt="" className="h-12 w-12"/> */}
                    {header} <span className="text-xs">[βeta]</span>
                </h1>
            </div>
            <div>
                {/* <GiHamburgerMenu className="text-xl lg:hidden text-gray-900"/> */}
                
                <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get Started
                </button>
            </div>
        </nav>
    )
}

export default Navbar