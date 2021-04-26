import React from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard: React.FC = () => {
    const { logout } = useAuth()
    return(
        <>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default Dashboard