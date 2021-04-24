import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { BiCreditCard, BiCreditCardAlt } from 'react-icons/bi'
import { FaEthereum } from 'react-icons/fa'

const DummyCheckout: React.FC = () => {

    var totalItems = 9
    var totalAmount = 100.00

    return(
        <section className="px-8 py-4 lg:px-16 flex justify-center" style={{fontFamily:"'Poppins', sans-serif"}}>
            <div className="space-y-8">
                <div className="space-x-4 flex items-center text-gray-700">
                    <h1 className="text-3xl ">Complete Transaction</h1>
                    <BsArrowRight className="text-xl"/>                
                </div>
                <div className="text-gray-600 space-y-4">
                    <p className="border-b">Total Items: <span className="text-black"> {totalItems} </span> </p>
                    <p className="border-b">Total Amount: <span className="text-black"> $ {totalAmount}  </span> </p>
                </div>
                <div className="space-y-4">
                        <button className="w-full bg-blue-600 p-2 text-gray-100 flex items-center justify-center">
                            Credit/Debit Card
                            <BiCreditCard className="ml-4 text-xl"/>
                        </button>
                    <button className="w-full bg-yellow-500 p-2 text-gray-100 flex items-center justify-center">
                        Cryptocurrencies
                        <FaEthereum className="ml-4 text-xl"/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default DummyCheckout