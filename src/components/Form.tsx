import React from 'react'
import { NavLink } from 'react-router-dom'

const Form: React.FC = () => {

    return(
        <div className="px-8 py-4 lg:px-16 md:flex md:justify-center">
            <section className="space-y-4 rounded-md border p-2 bg-white shadow-md md:w-1/3" style={{fontFamily:"'Krub', sans-serif"}}>
                <h1 style={{fontFamily:"'Raleway', sans-serif"}} className="text-xl text-center font-bold">
                    Login to cryρtex
                </h1>
                <div className="space-y-1">
                    <label htmlFor="email" className="text-lg font-semibold">Email</label>
                    <div>
                        <input 
                            type="email" 
                            className="border w-full px-2 py-1 shadow"
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="password" className="text-lg font-semibold">Password</label>
                    <div>
                        <input type="password" className="border w-full px-2 py-1 shadow"/>
                    </div>
                </div>
                <div>
                    <button className="w-full p-2 bg-gray-900 text-gray-200">Login</button>
                </div>
                <div className="flex items-center justify-between">
                    <NavLink to='/' className="text-sm">Forgot Password?</NavLink>
                    <NavLink to='/' className="text-sm">Create Account</NavLink>
                </div>
            </section>
        </div>
    )
}

export default Form