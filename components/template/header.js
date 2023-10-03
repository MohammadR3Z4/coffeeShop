import React from 'react'
import Navbar from './navbar'

function Header() {
    return (
        <div className='bg-header-pattern w-screen h-screen bg-center bg-no-repeat bg-cover'>
            <Navbar />
            <div className=''>
                <p>قهوه عربیکا تانزانیا</p>
                <p>یک فنجان بالانس !</p>
            </div>
        </div>
    )
}

export default Header
