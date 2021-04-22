import React from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Landing: React.FC = () => {
    return(
        <div className="bg-gray-100 overflow-y-auto h-screen w-screen space-y-4">
            <Navbar header="cryρtex"/>
            <Hero />
            <Features />
        </div>
    )
}

export default Landing