import React from 'react'
import { BiArrowBack, BiCaretRightCircle } from 'react-icons/bi'
import { IoCaretForward } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import metafox from '../assets/metamask_fox.png'

const PaymentDemo: React.FC = () => {
    return(
        <div className="bg-gray-100 h-screen w-screen" style={{fontFamily:"'Rubik', sans-serif"}}>
            {/* Top Bar */}
            <nav className="px-8 py-4">
                <NavLink to='/' className="flex items-center text-gray-800">
                    <BiArrowBack className="mr-4"/>Back To Cryptify
                </NavLink>
            </nav>
            {/* Payments Section */}
            <section className="px-8 py-4">
                <div className="flex justify-center">
                    {/*  Orderbook Card Component */}
                    <div className="w-full border max-w-md bg-white rounded-md shadow-md">
                        <div className="bg-gray-900 text-gray-100 w-full rounded-md rounded-b-none py-2 px-4">
                            <h2 className="text-center text-gray-500 text-lg">You Have to Pay</h2>
                            <h1 className="text-center text-2xl">$39.99</h1>
                        </div>
                        <div className="py-2 px-4 space-y-4">
                            <h1 className="text-center text-gray-800 text-xl">Choose your Wallet</h1>
                            <div className="border rounded">
                                <div className="border-b p-4 flex items-center space-x-4 hover:bg-blue-100">
                                    <div className="bg-yellow-100 rounded-full h-16 w-16 flex justify-center items-center">
                                        <img src={metafox} alt="" className="h-10 w-10"/>
                                    </div>
                                    <button className="flex items-center">
                                        <div>
                                            <p className="font-bold text-left">MetaMask</p>
                                            <p className="text-gray-500">Connect with a browser wallet</p>
                                        </div>
                                        <div className="ml-8 hover:text-blue-600">
                                            <IoCaretForward className="text-2xl"/>
                                        </div>
                                    </button>
                                </div>
                                <div className="border-b px-4 py-2">
                                    <button>Connect with Portis</button>
                                </div>
                                <div className="border-b px-4 py-2">
                                    <button>Connect with WalletConnect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PaymentDemo