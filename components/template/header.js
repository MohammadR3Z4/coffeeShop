import React from 'react'
import Navbar from './navbar'

function Header() {
    return (
        <div className='bg-header-pattern w-screen bg-center bg-no-repeat bg-cover'>
            <Navbar />
            <div className='flex justify-end items-center  text-right container min-h-screen'>
                <div className='text-white'>
                    <p className='text-[60px] font-bold leading-[62px] drop-shadow-[0_0_10px_rgba(0,0,0,0.40)]'>قهوه عربیکا تانزانیا</p>
                    <p className='mt-2 text-[48px] leading-[64px] font-light drop-shadow-[0_0_10px_rgba(0,0,0,0.40)]'>یک فنجان بالانس !</p>
                    <div className='mt-8 border border-Orange-300 w-[100px] h-[2px] drop-shadow-[0_0_10px_0_rgba(0,0,0,0.30)]'></div>
                    <p className='mt-8 text-2xl font-normal drop-shadow-[0_0_10px_rgba(0,0,0,0.40) w-[480px]'>قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Header
