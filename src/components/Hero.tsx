import React from 'react'
import eth from '../assets/ethereal_gray.svg'
const headerTxt = `Accept Cryptocurrencies for your Online Store`
const paraTxt = `Quickly accept Ethereum & Popular ERC-20 Tokens to enter a new era of financial economy`

const Hero: React.FC = () => {
    return(
        <div className="px-8 py-4 lg:px-16">
            <div>
                <img src={eth} alt="ethereal"/>
            </div>
            <div style={{fontFamily:"'Krub', sans-serif"}} className="space-y-4">
                <h1 className="text-center font-semibold text-2xl">
                    {headerTxt}
                </h1>
                <p className="text-center text-xl text-gray-500">{paraTxt}</p>
            </div>
            <div className="mt-4 flex justify-center" style={{fontFamily:"'Poppins', sans-serif"}}>
                <button className="p-2 bg-gray-800 text-gray-200 w-full">Get Started</button>
            </div>
        </div>
    )
}

export default Hero