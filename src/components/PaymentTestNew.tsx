import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import SelectCurrency from './payment/SelectCurrency'

const PaymentTestNew: React.FC = () => {

    const modalContainer = `justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`
    return(
        <div className={modalContainer}>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <BrowserRouter>
                        <Switch>
                            <Route path='/' component={SelectCurrency}/>
                        </Switch>
                    </BrowserRouter> 
                </div>
            </div>
        </div>
    )
}

export default PaymentTestNew