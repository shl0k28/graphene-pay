import React from 'react'
import SelectCurrency from './payment/SelectCurrency'

const PaymentTestNew: React.FC = () => {

    const modalContainer = `justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`
    return(
        <div className={modalContainer}>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <PaymentModule /> 
                </div>
            </div>
        </div>
    )
}

const PaymentModule: React.FC = () => {

    const [paymentProvider, setPaymentProvider] = React.useState<
        string | null
    >(null)

    switch(paymentProvider){
        case 'BTC':
            return(<>Pay with Bitcoin</>);
            break;

        case 'ETH':
            return(<>Pay with Ethereum</>);
            break;

        case 'CELO':
            return(<>Pay with Celo</>);
            break;

        default:
            return <SelectCurrency />
    }
}

export default PaymentTestNew