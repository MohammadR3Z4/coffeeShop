import Image from 'next/image'
import React from 'react'

function CategoryCard( {id , tittle , image} ) {
    return (
        <div className='flex flex-col items-center font-Vazir'>
            <Image src={image} className='' width={200} height={200} alt={tittle} priority={true} />
            <p className='text-Zinc-700 lg:text-xl md:text-lg text-sm font-semibold '> {tittle} </p>
        </div>
    )
}

export default CategoryCard
