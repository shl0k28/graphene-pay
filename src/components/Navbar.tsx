import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

interface INavbar {
    header: string;
}

const Navbar: React.FC<INavbar> = ({
    header
}) => {
    return(
        <nav className="px-8 py-4 flex items-center justify-between lg:px-16">
            <div style={{fontFamily:"'Raleway', sans-serif"}}>
                <h1 className="text-2xl lg:text-3xl tracking-wider font-bold text-gray-800 ">
                    {header} <span className="text-xs">[βeta]</span>
                </h1>
            </div>
            <div>
                <GiHamburgerMenu className="text-xl lg:hidden text-gray-900"/>
            </div>
        </nav>
    )
}

export default Navbar