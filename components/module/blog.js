import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'

function Blog( {image , day , month , year , tittle } ) {
    return (
        <div className='bg-white rounded-2xl flex md:justify-normal justify-evenly md:flex-col flex-row p-[10px] shadow-[0_1px_10px_0px_rgba(0,0,0,0.2)]'>
            <div className='flex justify-center items-center'>
                <Image className='rounded-2xl md:w-auto md:h-auto min-w-[130px] min-h-[130px]' src={image} width={280} height={186} alt={tittle} />
            </div>
            <div className='flex flex-col justify-between md:flex-row md:ms-0 ms-[10px]'>
                <p className='w-[190px] text-Zinc-700 lg:text-lg md:text-base text-sm font-normal mt-[15px]'> {tittle} </p>
                <div className='md:hidden block border border-Gray-100 w-full h-[1px]'></div>
                <div className='flex justify-between'>
                    <div className='flex md:flex-col flex-row md:gap-0 gap-1 text-Teal-600 mt-[10px] items-center'>
                        <p className='lg:text-2xl md:text-xl text-xs md:font-semibold font-normal'> {day} </p>
                        <p className='md:text-sm text-xs font-normal'> {month} </p>
                        <p className='md:text-sm text-xs font-normal'> {year} </p>

                    </div>
                    <div className='md:hidden flex'>
                        <Link href="#">
                            <button className='flex justify-center items-center text-xs rounded-[6px] bg-Orange-200/20 text-Orange-300 py-[2px] px-[10px]'>
                                مطالعه 
                                <ArrowLeftIcon className='ms-1' width={14} height={14} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
