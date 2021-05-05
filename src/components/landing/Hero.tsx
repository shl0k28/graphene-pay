import React from 'react'
import { openPopupWidget } from 'react-calendly'
import { NavLink } from 'react-router-dom'

import eth from '../../assets/ethereal_gray.svg'

const headerTxt = `Accept Cryptocurrencies for your Online Store`
const paraTxt = `The easiest way to integrate crypto payments on your online store.`

const Hero: React.FC = () => {

    const openCalendly = () => {
        openPopupWidget({url: "https://calendly.com/shlok-mange"})
    }

    return(        
        <div className="overflow-hidden lg:relative lg:px-24">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Krub:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>
            <div className="text-center md:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="space-y-2 text-3xl text-gray-900 sm:text-4xl font-bold" style={{fontFamily:"'Rubik', sans-serif"}}>
                    <span className="block">
                        {headerTxt}
                    </span>
                </h2>
                <p className="font-semibold text-xl mt-4 text-gray-800">
                    {paraTxt}
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <NavLink to='/login' type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Get Started
                        </NavLink>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <button onClick={openCalendly} type="button" className="py-4 px-6  bg-gray-800 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Book a Demo
                        </button>
                    </div>
                    {/* <InlineWidget url="https://calendly.com/shlok-mange"/> */}
                </div>
            </div>
            <img src={eth} className="lg:absolute lg:h-full max-w-1/2 lg:block right-24 top-0"/>
        </div>
    )
}
export default Hero