import React from 'react'
import db from "@/data/db.json"
import Image from 'next/image'

const Service = ( {id , image , title , subtitle} ) => {
    return (
        <div className='flex'>
            <Image src={image} width={66} height={73} />
            <div className='text-Zinc-700 ms-4'>
                <p className='text-lg font-semibold'> {title} </p>
                <p className='text-sm font-normal mt-[14px]'> {subtitle} </p>
            </div>
        </div>
    )
}

function SectionServices() {
    return (
        <div className='grid grid-cols-4 container mt-[112px] mb-[144px]'>
            {db.Services.map(item => (
                <Service key={item.id} {...item} />
            ))}
        </div>
    )
}

export default SectionServices
