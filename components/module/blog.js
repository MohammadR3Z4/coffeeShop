import Image from 'next/image'
import React from 'react'

function Blog( {image , day , month , year , tittle } ) {
    return (
        <div className='bg-white w-[300px] h-[285px] rounded-2xl flex flex-col py-[10px] px-[10px] shadow-[0_1px_10px_0px_rgba(0,0,0,0.2)]'>
            <Image className='rounded-2xl' src={image} width={280} height={186} />
            <div className='flex justify-between'>
                <p className='w-[190px] text-Zinc-700 text-lg font-normal mt-[15px]'> {tittle} </p>
                <div className='flex flex-col text-Teal-600 mt-[10px] items-center'>
                    <p className='text-2xl font-semibold'> {day} </p>
                    <p className='text-sm font-normal'> {month} </p>
                    <p className='text-sm font-normal'> {year} </p>
                </div>
            </div>
        </div>
    )
}

export default Blog
