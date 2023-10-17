import Image from 'next/image'
import React from 'react'

function QuickAccessCard( {id , tittle , subTittle , image} ) {
    return (
        <div className="relative text-white font-Vazir">
            <div className=''>
                <Image className='rounded-2xl bg-gradient-to-l' src={image} width={620} height={248} alt={tittle} />
            </div>
            <p className='lg:text-4xl lg:leading-[24px] md:text-3xl text-2xl font-semibold absolute top-[35%] right-[48px]'> {tittle} </p>
            <p className='lg:text-xl md:text-lg text-base leading-[24px] font-medium absolute top-[56%] right-[48px]'> {subTittle} </p>
        </div>
    )
}

export default QuickAccessCard
