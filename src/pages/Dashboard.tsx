import React from 'react'
import Topbar from '../components/dashboard/Topbar'
import { useAuth } from '../context/AuthContext'

const Dashboard: React.FC = () => {
    const { logout } = useAuth()
    
    return(
        <div className="h-screen w-screen bg-gray-100">
            <Topbar />
        </div>
    )
}

export default Dashboard