import React from 'react'
import Form from '../components/Form'
import Navbar from '../components/landing/Navbar'

const Login: React.FC = () => {
    return(
        <div className="h-screen w-screen bg-gray-100">
            <Navbar header="cryρtex"/>
            <Form />
        </div>
    )
}

export default Login