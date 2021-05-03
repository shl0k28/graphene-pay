import React from 'react'

import Navbar from '../components/landing/Navbar'
//components
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Landing: React.FC = () => {
    return(
        <div className="bg-gray-100 overflow-y-auto h-screen w-screen space-y-4">
            <Navbar header="cryρtify"/>
            <Hero />
            <Features />
            <Footer />
        </div>
    )
}


// const Landing: React.FC = () => {
//     return(
//         <div className="bg-gray-100 h-screen w-screen">
//             <Navbar header="cryptify" />
//         </div>
//     )
// }
export default Landing