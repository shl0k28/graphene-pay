import React from 'react'
import { NavLink } from 'react-router-dom'
import eth from '../assets/ethereal_gray.svg'

const headerTxt = `Accept Cryptocurrencies for your Online Store`
const paraTxt = `Quickly accept Ethereum & Popular ERC-20 Tokens to enter a new era of financial economy`

const Hero: React.FC = () => {
    return(
        <div className="px-8 py-4 lg:px-16 md:flex md:items-center justify-between md:flex-row-reverse">
            <div className="flex justify-center md:justify-start md:w-2/3">
                <img src={eth} alt="ethereal" className="animate-pulse-slow transorm skew-y-12"/>
            </div>
            <div>
                <div style={{fontFamily:"'Krub', sans-serif"}} className="space-y-4 lg:w-auto">
                    <h1 className="text-center font-semibold text-2xl lg:text-left lg:text-3xl">
                        {headerTxt}
                    </h1>
                    <p className="text-center text-xl text-gray-500 lg:text-left lg:text-2xl">{paraTxt}</p>
                </div>
                <div className="mt-4 flex justify-center lg:justify-start space-x-4" style={{fontFamily:"'Poppins', sans-serif"}}>
                    <button className="p-2 bg-gray-800 text-gray-200 w-full lg:w-auto">Get Started</button>
                    <NavLink to="/test" className="p-2 border border-gray-900">
                        Test Demo
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Hero