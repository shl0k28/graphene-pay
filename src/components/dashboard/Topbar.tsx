import React from 'react'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { GrSettingsOption, GrTransaction } from 'react-icons/gr'
import { SiReadthedocs } from 'react-icons/si'
import { RiAccountCircleLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Topbar: React.FC = () => {
    const { user } = useAuth()
    const navClass = `flex items-center space-x-4 text-gray-800 hover:text-blue-500`
    return(
        <nav className="bg-white px-8 py-4 lg:px-16 flex items-center justify-between">
            <div style={{fontFamily:"'Raleway', sans-serif"}}>
                <h1 className="text-2xl lg:text-3xl tracking-wider font-bold text-gray-800 ">
                cryρtex <span className="text-xs">[βeta]</span>
                </h1>
            </div>
            <div className="flex items-center space-x-8" style={{fontFamily:"'Poppins', sans-serif"}}>
                <NavLink to='/' className={`${navClass}`}>
                    <SiReadthedocs />
                    <p>Docs</p>
                </NavLink>
                <NavLink to='/' className={`${navClass}`}>
                    <GrSettingsOption/>
                    <p>Settings</p>
                </NavLink>
                <NavLink to='/' className={`${navClass}`}>
                    <GrTransaction />
                    <p>Transactions</p>
                </NavLink>
            </div>
            <div>
                <div className="flex items-center space-x-2">
                    <RiAccountCircleLine className="text-3xl"/>
                    <BsFillCaretDownFill className="text-lg"/>
                </div>
            </div>
        </nav>
    )
}

export default Topbar