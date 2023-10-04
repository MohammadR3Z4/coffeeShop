import Image from 'next/image'
import React from 'react'

function ProductCard() {
    return (
        <div className='px-5 pt-5 rounded-2xl bg-white drop-shadow-[0_1px_10px_0_rgba(0,0,0,0.05)]'>
            <Image src="/images/products/p1.png" width={260} height={260} alt='Product'/>
            <div>
                <p> قهوه ترک بن مانو مقدار 250 گرم </p>
                <p> 175,000 تومان </p>

            </div>
        </div>
    )
}

export default ProductCard
