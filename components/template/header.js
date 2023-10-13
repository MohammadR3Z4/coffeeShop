import React from 'react'
import Navbar from './navbar'
import Resnavbar from './Resnavbar'

function Header( {status} ) {
    return (
        <div className='md:bg-header-pattern m-0 bg-header-Respattern w-screen md:h-auto bg-center bg-no-repeat bg-cover  '>
            <Navbar />
            <Resnavbar status={status} />
            <div className='flex justify-end py-[30px] px-9 items-center text-right container md:min-h-screen'>
                <div className='text-white'>
                    <p className='xl:text-[60px] font-bold xl:leading-[62px] lg:text-[55px] lg:leading-[52px] md:text-[38px] md:leading-[40px] text-2xl drop-shadow-[0_0_10px_rgba(0,0,0,0.40)]'>قهوه عربیکا تانزانیا</p>
                    <p className='mt-2 xl:text-[48px] xl:leading-[64px] lg:text-4xl md:text-2xl text-xl font-light drop-shadow-[0_0_10px_rgba(0,0,0,0.40)]'>یک فنجان بالانس !</p>
                    <div className='mt-8 border border-Orange-300 w-[100px] h-[2px] drop-shadow-[0_0_10px_0_rgba(0,0,0,0.30)]'></div>
                    <p className='mt-8 xl:text-2xl font-normal lg:text-lg text-xs drop-shadow-[0_0_10px_rgba(0,0,0,0.40) lg:w-[480px] md:w-[268px] w-[200px]'>قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
                </div>
            </div>          
        </div>
    )
}

export default Header
