import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import { FaRedditAlien, FaDiscord, FaLinkedinIn } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'

const footerContainer = `px-8 py-4 lg:px-16 bg-gray-900 flex font-mono
    justify-between items-center
`
const Footer: React.FC = () => {
    return(
        <footer className="text-indigo-100 bg-gray-900">
            <div className={`${footerContainer}`}>   
                <div className="lg:text-lg">
                    <p>&copy;indebit Labs.</p>
                </div>
                <div className="hidden lg:block">
                    <div className="flex items-center space-x-2">
                        <AiFillMail className="text-lg"/>
                        <p>shlok@indebit.tech</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 lg:text-2xl lg:space-x-8">
                    <FaRedditAlien />
                    <FaDiscord />
                    <GrTwitter />
                    <FaLinkedinIn />
                </div>
            </div>
            <div className="space-x-4 px-16 text-gray-600 flex items-center justify-end text-sm" style={{fontFamily:"'Rubik', sans-serif"}}>
                <NavLink to="/" className="hover:underline">Terms & Conditions</NavLink>
                <NavLink to="/" className="hover:underline">Privacy Policy</NavLink>
                <NavLink to="/" className="hover:underline">GDPR</NavLink>
            </div>
        </footer>
    )
}

export default Footer