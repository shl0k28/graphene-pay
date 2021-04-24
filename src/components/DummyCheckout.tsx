import React from 'react'

//icons
import { BsArrowRight } from 'react-icons/bs'
import { BiCreditCard, BiBitcoin } from 'react-icons/bi'
import { FaEthereum } from 'react-icons/fa'
import { SiBitcoin, SiXrp } from 'react-icons/si'

const buttonClass = `focus:outline-none w-full hover:shadow-md p-2 text-gray-100 flex items-center justify-center`

const DummyCheckout: React.FC = () => {

    //dummy vars
    var totalItems = 9
    var totalAmount = 100.16

    //app state
    const [isPayment, setIsPayment] = React.useState(false)

    return(
        <section className="px-8 py-4 lg:px-16 flex justify-center" style={{fontFamily:"'Poppins', sans-serif"}}>
            <div className="space-y-8">
                <div className="space-x-4 flex items-center text-gray-700">
                    <h1 className="text-3xl ">Complete Transaction</h1>
                    <BsArrowRight className="text-xl"/>                
                </div>
                <div className="text-gray-600 space-y-4">
                    <p className="border-b">
                        Total Items: <span className="text-black"> {totalItems} </span> 
                    </p>
                    <p className="border-b">
                        Total Amount: <span className="text-black"> $ {totalAmount}  </span>
                    </p>
                </div>
                <div className="space-y-4">
                    <button className={`${buttonClass} bg-blue-600 hover:bg-blue-400`}>
                        Credit/Debit Card
                        <BiCreditCard className="ml-4 text-xl"/>
                    </button>
                    <button onClick={() => setIsPayment(true)} className={`${buttonClass} bg-yellow-500 hover:bg-yellow-400`}>
                        Cryptocurrencies
                        <FaEthereum className="ml-4 text-xl"/>
                    </button>
                </div>
            </div>
            {
                isPayment && <CryptexCheckout />
            }
        </section>
    )
}

interface ICryptexCheckout {
    amount: number;
    currency?: string;
}

const titleMsg = `Choose your preferred method of payment`
const iconClass = ` text-2xl hover:bg-gray-100 cursor-pointer p-2`

const CryptexCheckout: React.FC = () => {
    const [paymentProvider, setPaymentProvider] = React.useState<string | null>(null)

    return(
        <div>
            {
                paymentProvider === null && <SelectPaymentProvider />
            }
        </div>
    )
}

const SelectPaymentProvider: React.FC = () => {
    return(
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="px-8 py-4">
                        <h1>{titleMsg}</h1>
                    </div>
                    <div className="px-8 py-4 flex items-center justify-between">
                        <div className={`${iconClass} text-yellow-400 `}>
                            <div className="flex justify-center">
                                <SiBitcoin className="text-3xl text-center" name="BTC"/>
                            </div>
                            <p>Bitcoin </p>
                        </div>
                        <div className={`${iconClass} text-gray-900`}>
                            <div className="flex justify-center">
                                <FaEthereum className="text-3xl" name="ETH"/>
                            </div>
                            <p>Ethereum </p>
                        </div>
                        <div className={`${iconClass} text-green-900`}>
                            <div className="flex justify-center">
                                <SiXrp className="text-3xl" name="XRP"/>
                            </div>
                            <p>Ripple</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DummyCheckout