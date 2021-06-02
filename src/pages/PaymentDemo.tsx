import { ethers } from 'ethers'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { FaAngleRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import metafox from '../assets/metamask_fox.png'
import walletconnect from '../assets/walletconnect.svg'

const PaymentDemo: React.FC = () => {

    const merchantName = `Cryptify Technologies Inc.`
    const warning_message = `PLEASE NOTE THAT THIS GATEWAY IS NOT FOT TRANSFERRING REAL CRYPTO, KINDLY TEST IT WITH FAUCET CURRENCY ONLY
    `
    // @ts-ignore
    const globalEthereum = window.ethereum
    
    // gets the users metamask account
    const requestAccount = async () => {
        await globalEthereum.request({ method: 'eth_requestAccounts' });
    }

    const transferEth = async () => {
        if(typeof globalEthereum !== 'undefined'){
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(globalEthereum)
            const signer = provider.getSigner()
            const accountAddress = await signer.getAddress()
            const accountBalance = await signer.getBalance()
            console.log(`Address: `, accountAddress, `Balance:`, ethers.utils.formatUnits(accountBalance, 18))
        }
    }

    return(
        <div className="bg-gray-100 h-screen w-screen overflow-auto" style={{fontFamily:"'Rubik', sans-serif"}}>
            {/* Top Bar */}
            <nav className="px-8 py-4">
                <NavLink to='/' className="flex items-center text-gray-800">
                    <BiArrowBack className="mr-4"/>Back To Cryptify
                </NavLink>
            </nav>
            {/* Payments Section */}
            <section className="px-8 py-4 space-y-4">
                <div className="flex justify-center">
                    {/*  Orderbook Card Component */}
                    <div className="w-full border max-w-md bg-white rounded-md shadow-md space-y-2">
                        <div className="bg-gray-900 text-gray-100 w-full rounded-md rounded-b-none py-2 px-4">
                            <h2 className="text-center text-gray-500 text-lg">You are paying to</h2>
                            <h1 className="text-center text-2xl">{merchantName}</h1>
                        </div>
                        <div className="py-2 px-4 space-y-4">
                            <div>
                                <p className="text-center text-gray-600">Order Total</p>
                                <h2 className="text-center text-indigo-800 font-semibold text-2xl">$39.99</h2>
                            </div>
                            <h1 className="text-center text-gray-800 text-xl">Choose your Wallet</h1>
                            <div className="rounded">
                                <div className="border md:p-4 py-2 px-4 flex items-center space-x-4 hover:bg-blue-100">
                                    <div className="bg-yellow-100 rounded-full lg:h-16 h-12 w-12 lg:w-16 flex justify-center items-center">
                                        <img src={metafox} alt="" className="h-10 w-10"/>
                                    </div>
                                    <button onClick={transferEth} className="flex items-center group-hover:bg-opacity-5">
                                        <div>
                                            <p className="font-bold text-left">MetaMask</p>
                                            <p className="text-gray-500 hidden md:block">Connect with a browser wallet</p>
                                        </div>
                                        <div className="ml-8 hover:text-blue-600">
                                            <FaAngleRight className="text-2xl"/>
                                        </div>
                                    </button>
                                </div>
                                <div className="border md:p-4 py-2 px-4 flex items-center space-x-4 hover:bg-blue-100">
                                    <div className="bg-blue-100 rounded-full lg:h-16 h-12 w-12 lg:w-16 flex justify-center items-center">
                                        <img src={walletconnect} alt="" className="h-10 w-10"/>
                                    </div>
                                    <div>
                                        <button className="flex items-center">
                                            <div>
                                                <p className="font-bold text-left">WalletConnect</p>
                                                <p className="text-gray-500 hidden md:block">Connect with your mobile wallet</p>
                                            </div>
                                            <div className="ml-8 hover:text-blue-600">
                                                <FaAngleRight className="text-2xl"/>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-red-500 text-center">** {warning_message} **</p>
                </div>
            </section>
        </div>
    )
}

export default PaymentDemo