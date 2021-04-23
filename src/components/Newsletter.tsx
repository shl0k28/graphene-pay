import React from 'react'

const para = `Drop in your email & we'll reach out to you :))`

const Newsletter: React.FC = () => {
    return(
        <div className="px-8 py-4 lg:px-16 space-y-4 lg:flex lg:justify-center">
            <div className="space-y-4 lg:w-2/3">
                <div style={{fontFamily:"'Krub', sans-serif"}} className="space-y-2">
                    <h1 className="text-center text-3xl font-bold text-gray-800">Get in Touch!</h1>
                    <p className="text-center text-sm text-gray-700">{para}</p>
                </div>
                <div className="space-y-2" style={{fontFamily:"'Raleway', sans-serif"}}>
                    <input 
                        type="text"
                        className="w-full border border-gray-800 p-2 rounded-md focus:outline-none"
                        placeholder="yourname@company.com"
                    />
                    <button className="bg-gray-900 p-2 text-gray-200 w-full">Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter