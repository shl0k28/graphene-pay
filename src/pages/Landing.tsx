import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Landing: React.FC = () => {
    return(
        <div className="bg-gray-100 h-screen w-screen space-y-4">
            <Navbar header="cryρtex"/>
            <div className="w-full">
                <Hero />
            </div>
        </div>
    )
}

export default Landing