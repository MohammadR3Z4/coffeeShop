import Image from 'next/image'
import React from 'react'

function CategoryCard( {id , tittle , image} ) {
    return (
        <div className='flex flex-col items-center'>
            <Image src={image} className='' width={200} height={200} alt={tittle} />
            <p className='text-Zinc-700 text-xl font-semibold '> {tittle} </p>
        </div>
    )
}

export default CategoryCard
