import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function layout({ children }) {
    return (
        
        <div className='layout'>
            <Navbar />
            <div className='content'>
                {children}
            </div>
            <footer>
                <p>Have a good day!</p>
            </footer>
        </div>
    )
}
