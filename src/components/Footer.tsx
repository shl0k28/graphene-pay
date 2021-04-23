import React from 'react'
import { FaRedditAlien, FaDiscord } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'

const footerContainer = `px-8 py-4 lg:px-16 bg-gray-900 flex text-gray-200 font-mono
    justify-between items-center
`
const Footer: React.FC = () => {
    return(
        <footer className={`${footerContainer}`}>
             <div className="lg:text-lg">
                 <p>&copy;Axion Labs.</p>
             </div>
             <div className="flex items-center space-x-4 lg:text-2xl lg:space-x-8">
                <FaRedditAlien />
                <FaDiscord />
                <GrTwitter />
             </div>
        </footer>
    )
}

export default Footer