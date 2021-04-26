import React from 'react'
import { SiEthereum } from 'react-icons/si'
import { CgWebsite } from 'react-icons/cg'
import { v4 as uuidv4} from 'uuid'
import { GrCopy } from 'react-icons/gr'
import { RiFileCopyLine } from 'react-icons/ri'
import { AiOutlineEdit, AiOutlineMore } from 'react-icons/ai'

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
    },
]

const UserApps: React.FC = () => {
    return(
        <div className="px-16 py-4 space-y-4" style={{fontFamily:"'Raleway', sans-serif"}}>
            <h1 className="font-semibold text-2xl text-gray-800 tracking-wide">
                Your Gateways:
            </h1>
            <section>
                <div className="flex space-x-4 overflow-x-auto">
                    {
                        gateways.map((app) => {
                            return(
                                <div key={app.gateway_id} className="space-y-4 px-4 py-2 bg-white shadow-md">
                                    <h1 className="text-xl border-b font-medium">{app.name}</h1>
                                    <div className="flex items-center space-x-2">
                                        <p>ID: <span className="text-gray-700 bg-gray-200 px-2 py-1 rounded-md">{app.client_id}</span></p>
                                        <RiFileCopyLine className="text-gray-600 cursor-pointer"/>
                                    </div>
                                    <div className="flex items-center">
                                        <CgWebsite />
                                        <p className="text-gray-800">: {app.website}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <SiEthereum />
                                        <p className="text-sm">: {app.eth_address}</p>
                                    </div>
                                    <div className="flex items-center justify-center space-x-4">
                                        <button className="flex items-center bg-gray-800 px-2 py-1 text-sm text-gray-200">
                                            Edit <AiOutlineEdit className="ml-2"/>
                                        </button>
                                        <button className="flex items-center">
                                            More <AiOutlineMore />
                                        </button> 
                                    </div>
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