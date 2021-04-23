import React from 'react'

//components
import Features from '../components/Features'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Landing: React.FC = () => {
    return(
        <div className="bg-gray-100 overflow-y-auto h-screen w-screen space-y-4">
            <Navbar header="cryρtex"/>
            <Hero />
            <Features />
            {/* <div className="flex justify-center"> */}
                <Newsletter />
            {/* </div> */}
        </div>
    )
}

export default Landing