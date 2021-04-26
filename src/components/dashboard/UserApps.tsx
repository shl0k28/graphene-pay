import React from 'react'
import { v4 as uuidv4} from 'uuid'

const gateways = [
    {
        gateway_id: '1',
        website: 'https://localhost:3000',
        client_id: uuidv4(),
        eth_address: '0xe4b2a861b10fb8b07a87e140ec98e11225624aa0',
        name: `Shlok's ecommerce site.`
    },
    {
        gateway_id: '2',
        website: 'https://localhost:3000',
        client_id: uuidv4(),
        eth_address: '0xd48a52571c8f3fbe57833b89b872f020e6a642af',
        name: `Shlok's personal site.`
    }
]

const UserApps: React.FC = () => {
    return(
        <div className="px-16 py-4 space-y-4" style={{fontFamily:"'Raleway', sans-serif"}}>
            <h1 className="font-semibold text-2xl text-gray-800 tracking-wide">
                Your Gateways:
            </h1>
            <section>
                <div className="flex space-x-4">
                    {
                        gateways.map((app) => {
                            return(
                                <div key={app.gateway_id} className="space-y-2 px-4 py-2 bg-white shadow-md">
                                    <h1 className="text-xl border-b font-medium">{app.name}</h1>
                                    <p>ID: <span className="text-gray-700">{app.client_id}</span></p>
                                    <p className="text-green-500">{app.website}</p>
                                    <p>{app.eth_address}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default UserApps