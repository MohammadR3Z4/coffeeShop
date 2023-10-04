import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

// icons
import { ShoppingCartIcon , MoonIcon , ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
 
const ItemNavbar = ( {item} ) =>{
    return(
        <li><Link href="#" className='text-Gray-300 text-xl font-medium '> {item} </Link></li>
    )
}


function Navbar() {
    return (
        <div className='bg-black/50 fixed top-9 right-0 left-0 flex rounded-3xl w-[90%] mx-auto py-5 px-10 backdrop-blur-[6px] z-10'>
            <Image className='me-9' src="/images/app-logo.png" width={59} height={56} alt="Logo" />

            <nav className='flex list-none gap-9 py-[14px]'>
                <ItemNavbar item="صفحه اصلی" />
                <ItemNavbar item="فروشگاه" />
                <ItemNavbar item="دیکشنری" />
                <ItemNavbar item="بلاگ" />
                <ItemNavbar item="درباره ما" />
                <ItemNavbar item="تماس باما" />
            </nav>

            <div className='flex ms-auto gap-5 text-Orange-200 mt-[11px]'>
                <MoonIcon width={34} height={34} />
                <ShoppingCartIcon width={34} height={34} />
            </div>

            <div className='border border-white/20 w-[1px] h-14 mx-10'></div>
                <ArrowLeftOnRectangleIcon className='text-Orange-200 mt-[11px] rotate-180' width={34} height={34} />            
            <button className='ms-[10px] text-xl font-normal cursor-pointer mb-2 text-Orange-200'> ورود | ثبت نام </button>
        </div>
    )
}

export default Navbar
