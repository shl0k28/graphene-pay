import React from 'react'
import { v4 as uuidv4} from 'uuid'
import NewGatewayModal from './NewGatewayModal'
//icons
import { SiEthereum } from 'react-icons/si'
import { CgWebsite } from 'react-icons/cg'
import { RiFileCopyLine } from 'react-icons/ri'
import { AiOutlineEdit, AiOutlineMore } from 'react-icons/ai'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { firebaseRef } from '../../config/firebase'
import { useAuth } from '../../context/AuthContext'

const gateways = [
    {
        gateway_id: '1',
        website: 'https://localhost:3000',
        client_id: uuidv4(),
        eth_address: '0xe4b2a861b10fb8b07a87e140ec98e11225624aa0',
        name: `New ecommerce site.`
    },
    {
        gateway_id: '2',
        website: 'https://localhost:3000',
        client_id: uuidv4(),
        eth_address: '0xd48a52571c8f3fbe57833b89b872f020e6a642af',
        name: `New personal site.`
    },
]

interface IGateway {
    site: string,
    created_at: any,
    client_id: string,
    name: string,
    eth_address: string
}

const UserApps: React.FC = () => {

    const { user } = useAuth()
    
    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text)
        console.log('Copied to clipboard')
        setCopyToClip(`${text} copied to clipboard.`)
    }

    const [paymentGateways, setPaymentGateways] = React.useState<Array<IGateway>>([])

    const getPaymentGateways = async () => {
        var res = await firebaseRef.
                        collection('users').
                        doc(user?.uid).
                        collection('payment_gateways').
                        onSnapshot(doc => {
                            doc.forEach((gateway) => {
                                var { client_id, created_at, eth_address, site, name} = gateway.data()
                                var newGateway: IGateway = {
                                    client_id,
                                    created_at,
                                    eth_address,
                                    name,
                                    site
                                }
                                setPaymentGateways(state => [newGateway])
                            })
                        })
                
    }

    const [newGateway, setNewGateway] = React.useState<boolean>(false)
    const [copyToClip, setCopyToClip] = React.useState<boolean | string>(false)

    React.useEffect(() => {
        getPaymentGateways()
    }, [])

    return(
        <div className="px-16 py-4 space-y-4" style={{fontFamily:"'Raleway', sans-serif"}}>
            <h1 className="font-semibold text-2xl text-gray-800 tracking-wide">
                Your Gateways:
            </h1>
            <section className="space-y-4">
                <div className="flex space-x-4 overflow-x-auto">
                    {
                        paymentGateways ? paymentGateways.map((app, index) => {
                            return(
                                <div key={index} className="space-y-4 px-4 py-2 bg-white shadow-md">
                                    <h1 className="text-xl border-b font-medium">{app.name}</h1>
                                    <div className="flex items-center space-x-2">
                                        <p>ID: <span className="text-gray-700 bg-gray-200 px-2 py-1 rounded-md">{app.client_id}</span></p>
                                        <RiFileCopyLine className="text-gray-600 cursor-pointer" onClick={() => copyToClipboard(app.client_id)}/>
                                    </div>
                                    <div className="flex items-center">
                                        <CgWebsite />
                                        <p className="text-gray-800">: {app.site}</p>
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
                        }) : (
                            <></>
                        )
                    }
                </div>
                <div className="bg-white shadow-md px-8 py-4 max-w-sm">
                    <div onClick={() => setNewGateway(true)} className="border border-dashed border-gray-400 p-4 rounded-md cursor-pointer hover:bg-gray-50">
                        <div className="flex justify-center">
                            <IoMdAddCircleOutline className="text-5xl text-gray-600"/>
                        </div>
                        <p className="text-center">
                            Create a New Payment Gateway.
                        </p>
                    </div>
                </div>
                {
                    newGateway && <NewGatewayModal setNewGateway={setNewGateway}/>
                }
            </section>
        </div>
    )
}

export default UserApps