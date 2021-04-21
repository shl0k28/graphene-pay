import React from 'react'
import security from '../assets/security.svg'
import world from '../assets/world.svg'
import data from '../assets/data.svg'

const features = [
    {
        title: 'Highly Secure',
        para: `Receive funds with utmost security, directly into your wallet.`,
        svg: security
    },
    {
        title: 'Accessible to All',
        para: `Sell your products everywhere in the world. No bank accounts, no comissions, no hassle.`,
        svg: world
    },
    {
        title: 'Permanent Ledger',
        para: `Your transactions are recorded permanently. No mishaps, no data loss. `,
        svg: data
    },
]

const Features: React.FC = () => {
    return(
        <div className="px-8 py-4 lg:px-16 space-y-8">
            <h1 className="text-center font-bold text-3xl" style={{fontFamily:"'Krub', sans-serif"}}>
                Why Crypto?
            </h1>
            <div className="space-y-8">
                {
                    features.map((feature, index) => {
                        return(
                            <div key={index} className="space-y-4">
                                <img src={feature.svg} alt={feature.title}/>
                                <h1 className="text-center font-bold text-2xl" style={{fontFamily:"'Raleway', sans-serif"}}>
                                    {feature.title}
                                </h1>
                                <p style={{fontFamily:"'Krub', sans-serif"}} className="text-center font-medium text-lg text-gray-700">
                                    {feature.para}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Features