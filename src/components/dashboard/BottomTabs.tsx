import React from 'react'
import { AiTwotoneSetting } from 'react-icons/ai'
import { FaReceipt } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'

import { MdDashboard, MdReceipt } from 'react-icons/md'

const BottomTabs: React.FC = () => {
    const [currentTab, setCurrentTab] = React.useState(1)

    return(
        <div style={{fontFamily:"'Rubik', sans-serif"}} className="px-8 py-2 fixed bottom-0 bg-white w-full drop-shadow-md">
            <nav className="flex items-center justify-between">
                <div className="text-gray-500">
                    <div className="flex justify-center">
                        <MdDashboard className="text-center text-3xl"/>
                    </div>
                    <p className="text-xs text-center">Dashboard</p>
                </div>
                <div className="text-gray-500">
                    <div className="flex justify-center">
                        <MdReceipt className="text-center text-3xl"/>
                    </div>
                    <p className="text-xs text-center">Bills</p>
                </div>
                <div className="text-gray-500">
                    <div className="flex justify-center">
                        <AiTwotoneSetting className="text-center text-3xl"/>
                    </div>
                    <p className="text-xs text-center">Settings</p>
                </div>
            </nav>
        </div>
    )
}

export default BottomTabs