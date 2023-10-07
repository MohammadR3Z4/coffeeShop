import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

// icons
import { ShoppingCartIcon , MoonIcon , ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
 
const ItemNavbar = ( {item} ) =>{
    return(
        <li><Link href="#" className='text-Gray-300 xl:text-xl xl:font-medium lg:text-lg md:text-base font-normal cursor-pointer'> {item} </Link></li>
    )
}


function Navbar( ) {
    return (
        <div className='bg-black/50 fixed top-9 right-0 left-0 md:flex hidden rounded-3xl lg:w-[90%] md:w-[95%] mx-auto py-5 xl:px-10 px-5 backdrop-blur-[6px] z-10'>
            <Image className='xl:me-9 me-5 xl:w-[59px] xl:h-[56px] w-[30px] h-[33px] my-auto' src="/images/app-logo.png" width={59} height={56} alt="Logo" />

            <nav className='flex list-none xl:gap-9 lg:gap-5 md:gap-3 my-auto'>
                <ItemNavbar item="صفحه اصلی" />
                <ItemNavbar item="فروشگاه" />
                <ItemNavbar item="دیکشنری" />
                <ItemNavbar item="بلاگ" />
                <ItemNavbar item="درباره ما" />
                <ItemNavbar item="تماس باما" />
            </nav>

            <div className='flex ms-auto lg:gap-5 gap-4 text-Orange-200 my-auto'>
                <MoonIcon className='xl:w-[34px] xl:h-[34px] w-[25px] h-[25px]' width={34} height={34} />
                <ShoppingCartIcon className='xl:w-[34px] xl:h-[34px] w-[25px] h-[25px]' width={34} height={34} />
            </div>

            <div className='border border-white/20 w-[1px] xl:h-14 h-9 xl:mx-10 lg:mx-6 md:mx-2'></div>
            
            <button className='ms-[10px] xl:text-xl lg:text-lg md:text-base my-auto xl:font-normal cursor-pointer text-Orange-200 flex justify-center'>
            <ArrowLeftOnRectangleIcon className='text-Orange-200 rotate-180 lg:me-[10px] md:me-1 mt-1 xl:w-[34px] xl:h-[34px] w-[25px] h-[25px]' width={34} height={34} />
            ورود | ثبت نام </button>
        </div>
    )
}

export default Navbar
