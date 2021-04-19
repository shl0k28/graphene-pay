import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

interface INavbar {
    header: string;
}

const Navbar: React.FC<INavbar> = ({
    header
}) => {
    return(
        <nav className="px-8 py-4 flex items-center justify-between">
            <div style={{fontFamily:"'Krub', sans-serif"}}>
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-500">
                    {header}
                </h1>
            </div>
            <div>
                <GiHamburgerMenu className="text-2xl"/>
            </div>
        </nav>
    )
}

export default Navbar