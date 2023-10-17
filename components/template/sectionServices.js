import React from 'react'
import db from "@/data/db.json"
import Image from 'next/image'

const Service = ( {id , image , title , subtitle} ) => {
    return (
        <div className='flex lg:flex-row flex-col justify-center items-center'>
            <Image src={image} width={66} height={73} alt={title} />
            <div className='text-Zinc-700 ms-4 lg:mt-0 mt-5'>
                <p className='lg:text-lg md:text-base text-sm font-semibold'> {title} </p>
                <p className='md:text-sm text-xs font-normal lg:mt-[14px] md:mt-2 mt-1'> {subtitle} </p>
            </div>
        </div>
    )
}

function SectionServices() {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-10 container lg:mt-[112px] mt-20 lg:mb-[144px] md:mb-20 mb-14'>
            {db.Services.map(item => (
                <Service key={item.id} {...item} />
            ))}
        </div>
    )
}

export default SectionServices
