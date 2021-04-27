import React from 'react'
import { CgNametag, CgWebsite } from 'react-icons/cg'
import { SiEthereum } from 'react-icons/si'

const NewGatewayModal: React.FC = () => {
    
    const modalContainer = `justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`
    const inputClass = `shadow-sm w-full px-2 py-1 border`
    return(
        <div className={`${modalContainer}`}>
            <div className="relative w-auto my-12 mx-auto max-w-5xl">
                <div className="border shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="px-8 py-4 space-y-4 mx-2">
                        <h1 className="text-3xl">Create a new Gateway</h1>
                        <div className="space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="">Enter a name for your gateway*</label>
                                <CgNametag />
                            </div>
                            <div>
                                <input type="text" className={`${inputClass}`} placeholder="My new ecommerce site"/>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="">Enter your site URL*</label>
                                <CgWebsite />
                            </div>
                            <div>
                                <input type="text" className={`${inputClass}`} placeholder="https://newamazon.com"/>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="">Enter your ethereum address*</label>
                                <SiEthereum />
                            </div>
                            <div>
                                <input type="text" className={`${inputClass}`} placeholder="0xe4b2a861b10fb8b07a87e140ec98e11225624aa0"/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center space-x-16">
                            <button className="bg-green-700 px-2 py-1 text-white">Create</button>
                            <button className="bg-red-500 px-2 py-1 text-white">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewGatewayModal