import React from 'react'
import { InlineWidget, openPopupWidget } from 'react-calendly'
// @ts-ignore
import ReactTypingEffect from 'react-typing-effect'
import { NavLink } from 'react-router-dom'

import eth from '../../assets/ethereal_gray.svg'
import { AiOutlineCheck } from 'react-icons/ai'

const headerTxt = `Accept Cryptocurrencies for your Online Store`
const paraTxt = `The easiest way to integrate crypto payments on your online store.`

// const Hero: React.FC = () => {


//     return(        
//         <div className="overflow-hidden lg:relative lg:px-24">
//             <style>
//                 @import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Krub:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
//             </style>
//             <div className="text-start md:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
//                 <h2 className="space-y-2 text-3xl text-gray-900 sm:text-4xl font-bold" style={{fontFamily:"'Rubik', sans-serif"}}>
//                     <span className="block">
//                         Accept {' '}
//                         <span className="text-blue-600">
//                             <ReactTypingEffect 
//                                 text={["Crypto", "Ethereum", "USD Coin", "Celo", "Tezos"]}
//                                 speed={200}
//                                 eraseDelay={1500}
//                                 eraseSpeed={200}
//                                 cursor="_"
//                                 typingDelay={500}
//                             />
//                         </span>
//                         {' '}
//                         payments on your site.
//                     </span>
//                 </h2>
//                 <p className="font-semibold text-xl mt-4 text-gray-800">
//                     {paraTxt}
//                 </p>
//                 <div className="lg:mt-0 lg:flex-shrink-0">
//                     <div className="mt-12 inline-flex rounded-md shadow">
//                         <NavLink to='/login' type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
//                             Get Started
//                         </NavLink>
//                     </div>
//                     <div className="ml-3 inline-flex rounded-md shadow">
//                         <button onClick={openCalendly} type="button" className="py-4 px-6  bg-gray-800 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
//                             Book a Demo
//                         </button>
//                     </div>
//                     {/* <InlineWidget url="https://calendly.com/shlok-mange"/> */}
//                 </div>
//             </div>
//         </div>
//     )CeloC
// }

const Hero = () => {

    const advantages = [
        'Lightspeed Setup',
        '0% Hidden Fees',
        'Global Payments',
        'No middlemen',
        'Irreversible Transactions'
    ]

    
    const openCalendly = () => {
        openPopupWidget({url: "https://calendly.com/shlok-mange"})
    }

    return(
        <section className="px-8 md:px-16 space-y-8 md:py-16 py-2" style={{fontFamily:"'Rubik', sans-serif"}}>
            {/* <div>
                <h1 className="font-bold text-2xl text-gray-900 lg:text-5xl text-center">The Best Way to Accept <span className="text-blue-600">Crypto</span> on your Site.</h1>
            </div> */}
            <div className="md:flex md:px-16 text-left text-2xl font-bold lg:text-start lg:text-5xl text-gray-800 justify-between items-center">
                <div>
                    ACCEPT{' '}
                    <span className="text-blue-600">
                        <ReactTypingEffect 
                            text={['Ethereum', '$ USD Coin', 'DAI', 'Celo', 'Tezos', 'Matic', 'Cardano ADA']}
                            speed={100}
                            eraseDelay={5000}
                            eraseSpeed={100}
                            cursor="_"
                            typingDelay={500}
                            />{' '}
                    </span>
                    <p>FOR YOUR ONLINE STORE</p>
                    <div className="text-xl mt-8 font-medium">
                        <ul className="space-y-4">
                            {
                                advantages.map((adv) => {
                                    return(
                                        <li className="flex items-center space-x-4">
                                            <AiOutlineCheck className="text-green-400 mr-4"/>{adv}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                         <NavLink to='/login' type="button" className="py-4 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                             Get Started
                         </NavLink>
                     </div>
                     <div className="ml-3 inline-flex rounded-md shadow">
                         <button onClick={openCalendly} type="button" className="py-4 px-6  bg-gray-800 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                             Book a Demo
                         </button>
                     </div>
                    </div>
                </div>
                <img src={eth} className="h-full lg:w-1/2"/>
            </div>
        </section>
    )
}

export default Hero