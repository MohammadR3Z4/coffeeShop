import Image from 'next/image'
import React from 'react'
import SectionNewProduct from '../template/sectionNewProduct'

// icon
import { ArrowsRightLeftIcon , ShoppingCartIcon } from '@heroicons/react/24/outline';

function ProductCard( {id , tittle , image , Isavailable , price , Isdiscount , discount} ) {

    const priceAfterDiscount = price - ( price * discount ) / 100 ;

    return (
        <div className='p-5 rounded-2xl bg-white shadow-[0_1px_10px_0px_rgba(0,0,0,0.05)]'>
            <div className={`${Isdiscount ? "absolute" : "hidden"} text-center flex justify-center items-center bg-Orange-300 w-[54px] h-[30px] text-white rounded-[100px]`}>
                <span className={`text-base font-semibold`}> {discount}% </span>
            </div>
                <Image src={image} width={260} height={260} alt='Product'/>

            <div>
                <p className='text-Zinc-700 lg:text-xl lg:font-medium mt-5'> {tittle} </p>
                <div className='flex mt-[10px]'>
                    <p className={`${Isavailable ? "flex" : "hidden"} ${Isdiscount ? "text-Gray-400 order-2 line-through decoration-Red-400 ms-[10px] mt-1" : "text-Teal-600 lg:text-xl font-semibold"} `}> {price.toLocaleString()}  تومان  </p>
                    <p className={`${Isavailable ? "hidden" : "flex"} text-Red-400 lg:text-xl font-normal`}> فعلا موجود نیست </p>
                    <p className={`${Isdiscount ? "flex text-Teal-600 lg:text-xl font-semibold order-1" : "hidden"} text-`}> {priceAfterDiscount.toLocaleString()} 
                    <span className='lg:text-sm font-normal ms-1 mt-1'> تومان </span> </p>
                </div>
                <div className='flex mt-4 text-Gray-400'>
                    <div className='bg-Gray-100 hover:bg-Teal-600 hover:text-white rounded-full h-9 w-9 relative'>
                        <ShoppingCartIcon className='absolute top-[8px] right-[6px]' width={22} height={22}/>
                    </div>
                    <ArrowsRightLeftIcon className='hover:text-Teal-600 ms-5 mt-[6px]' width={24} height={24} />
                </div>

            </div>
        </div>
    )
}

export default ProductCard
