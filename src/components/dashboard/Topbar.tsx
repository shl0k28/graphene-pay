import React from 'react'
import { useAuth } from '../../context/AuthContext'

const Topbar: React.FC = () => {
    const { user } = useAuth()
    
    return(
        <nav className="bg-white px-8 py-4 lg:px-16">
            <h1>Hi {user?.email},</h1>
        </nav>
    )
}

export default Topbar