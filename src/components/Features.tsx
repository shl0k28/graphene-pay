import React from 'react'
import security from '../assets/security.svg'
import world from '../assets/world.svg'
import data from '../assets/data.svg'

const features = [
    {
        title: 'Unbreakable Security',
        para: `Receive funds with utmost security, directly into your wallet.`,
        svg: security
    },
    {
        title: 'Go Global',
        para: `No bank accounts, no comissions, no hassle.`,
        svg: world
    },
    {
        title: 'Never lose your data.',
        para: `Your transactions are recorded permanently. No mishaps, no data loss. `,
        svg: data
    },
]

const Features: React.FC = () => {
    return(
        <div className="px-8 py-4 space-y-8">
            <h1 className="text-center font-bold text-4xl" style={{fontFamily:"'Krub', sans-serif"}}>
                Why Crypto?
            </h1>
            <div className="lg:flex lg:space-x-2 ">
                <div className="lg:px-4 lg:flex lg:space-x-3 space-y-4 lg:space-y-0">
                    {
                        features.map((feature, index) => {
                            return(
                                <FeatureCard feature={feature} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

interface IFeatureCard {
    feature: {
        title: string;
        para: string;
        svg: string;
    }
}

const FeatureCard: React.FC<IFeatureCard> = ({feature}) => {
    return(
        <div>
            <div className="border bg-gray-50 rounded-lg shadow-md py-8">
                <div className="flex justify-center">
                    <img src={feature.svg} alt="" className="max-w-sm w-auto"/>
                </div>
                <div className="space-y-4 px-4">
                    <h1 style={{fontFamily:"'Raleway', sans-serif"}} className="text-center text-2xl text-gray-800 font-semibold">
                        {feature.title}
                    </h1>
                    <p className="text-center text-gray-700 tracking-tight text-lg px-4" style={{fontFamily:"'Rubik', sans-serif"}}>
                        {feature.para}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Features