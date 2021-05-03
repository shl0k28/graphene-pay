import React from 'react'
import { NavLink } from 'react-router-dom'
import eth from '../../assets/ethereal_gray.svg'

const headerTxt = `Accept Cryptocurrencies for your Online Store`
const paraTxt = `Quickly accept Ethereum & Popular ERC-20 Tokens to enter a new era of financial economy`

/* const Hero: React.FC = () => {
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

*/

const Hero: React.FC = () => {
    return(
        
<div className="overflow-hidden relative px-8">
    <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="space-y-2 text-3xl font-extrabold text-black sm:text-4xl" style={{fontFamily:"'Raleway', sans-serif"}}>
            <span className="block">
                {headerTxt}
            </span>
            {/* <span className="block text-2xl text-indigo-500">
                No commissions. No accounts. No BS.
            </span> */}
        </h2>
        <p className="text-xl mt-4 text-gray-700" style={{fontFamily:"'Krub', sans-serif"}}>
            {paraTxt}
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get started
                </button>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
                <button type="button" className="py-4 px-6  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Test Demo
                </button>
            </div>
        </div>
    </div>
    <img src={eth} className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"/>
</div>

    )
}
export default Hero