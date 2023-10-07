import Image from 'next/image'
import React from 'react'

function QuickAccessCard( {id , tittle , subTittle , image} ) {
    return (
        <div className="relative text-white">
            <Image className='rounded-2xl bg-gradient-to-br from-black/60 via-30% to-black/10' src={image} width={620} height={248} alt={tittle} />
            <p className='text-4xl leading-[24px] font-semibold absolute top-[35%] right-[48px]'> {tittle} </p>
            <p className='text-xl leading-[24px] font-medium absolute top-[56%] right-[48px]'> {subTittle} </p>
        </div>
    )
}

export default QuickAccessCard
