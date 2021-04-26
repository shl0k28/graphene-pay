import React from 'react'
import { NavLink, Redirect, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Form: React.FC = () => {
    const emailRef = React.createRef<HTMLInputElement>()
    const passwordRef = React.createRef<HTMLInputElement>()

    const { loginWithEmail } = useAuth()
    const history = useHistory()

    const signIn = async (
        email: string, 
        password: string
    ) => {
        try {
            var res = await loginWithEmail(email, password)
            if(res?.user){
                history.push('/dashboard')            
            }
        }
        catch(err){
            console.error(err)
        }
    }

    return(
        <div className="px-8 py-4 lg:px-16 md:flex md:justify-center">
            <section className="space-y-4 rounded-md p-2  md:w-1/3" style={{fontFamily:"'Poppins', sans-serif"}}>
                <h1 style={{fontFamily:"'Raleway', sans-serif"}} className="text-2xl text-center font-bold">
                    Login to cryρtex
                </h1>
                <div className="space-y-1">
                    <label htmlFor="email" className="text-lg">Email</label>
                    <div>
                        <input 
                            type="email" 
                            className="border w-full px-2 py-1 shadow"
                            ref={emailRef}
                            placeholder="yourname@company.com"
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="password" className="text-lg ">Password</label>
                    <div>
                        <input 
                            type="password" 
                            className="border w-full px-2 py-1 shadow"
                            ref={passwordRef}
                            placeholder="**********"
                        />
                    </div>
                </div>
                <div>
                    <button 
                        className="w-full p-2 bg-gray-900 text-gray-200"
                        // @ts-ignore
                        onClick={() => signIn(emailRef.current?.value, passwordRef.current?.value)}
                    >
                        Login
                    </button>
                </div>
                <div className="flex items-center justify-between underline">
                    <NavLink to='/' className="text-sm">Forgot Password?</NavLink>
                    <NavLink to='/' className="text-sm">Signup Here</NavLink>
                </div>
            </section>
        </div>
    )
}

export default Form