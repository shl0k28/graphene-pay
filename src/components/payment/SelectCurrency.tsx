import React from 'react'
//icons
import { IconType } from 'react-icons'
import { GiCancel, GiLinkedRings } from 'react-icons/gi'
import { GrBitcoin } from 'react-icons/gr'
import { SiEthereum } from 'react-icons/si'
import { NavLink } from 'react-router-dom'

const SelectCurrency: React.FC = () => {

    const [paymentProvider, setPaymentProvider] = React.useState('Bitcoin')
    
    return(
        <section className="px-8 py-4 space-y-4">
            <div className="flex space-x-32 items-center">
                <h1>Select your payment provider:</h1>
                <GiCancel className="text-red-700"/>
            </div>
            <div className="space-y-4">
                <div className="shadow p-1 hover:bg-gray-100">
                    <div className="flex items-center space-x-4 w-full">
                        <GrBitcoin className="text-yellow-400"/>
                        <button>Bitcoin</button>
                    </div>
                </div>
                <div className="shadow p-1 hover:bg-gray-100">
                    <div className="flex items-center space-x-4 w-full">
                        <SiEthereum className="text-gray-800"/>
                        <button>Ethereum</button>
                    </div>
                </div>
                <div className="shadow p-1 hover:bg-gray-100">
                    <div className="flex items-center space-x-4 w-full">
                        <GiLinkedRings className="text-green-400"/>
                        <button>Celo</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SelectCurrency