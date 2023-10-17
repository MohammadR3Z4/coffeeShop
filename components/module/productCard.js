import Image from 'next/image'
import React from 'react'
import SectionNewProduct from '../template/sectionNewProduct'


// icon
import { ArrowsRightLeftIcon , ShoppingCartIcon } from '@heroicons/react/24/outline';
import StarRating from './starRating';

function ProductCard( {id , tittle , image , Isavailable , price , Isdiscount , discount , rate} ) {

    const priceAfterDiscount = price - ( price * discount ) / 100 ;

    return (
        <div className='lg:p-5 p-4 rounded-2xl bg-white shadow-[0_1px_10px_0px_rgba(0,0,0,0.05)] font-Vazir'>
            <div className={`${Isdiscount ? "absolute" : "hidden"} text-center flex justify-center items-center bg-Orange-300 
            md:w-[54px] md:h-[30px] w-10 h-5 text-white rounded-[100px]`}>
                <span className={`md:text-base text-xs font-semibold`}> {discount}% </span>
            </div>
            <div className='flex justify-center items-center'>
                <Image className='md:w-auto md:h-auto w-[128px] h-[128px]' src={image} width={260} height={260} alt='Product'/>
            </div>
            <div>
                <p className='text-Zinc-700 md:text-xl text-sm font-medium mt-5'> {tittle} </p>
                <div className='flex flex-wrap gap-2 mt-[10px]'>
                    <div className='flex justify-center order-2 items-center'>
                        <p className={`${Isavailable ? "flex justify-center items-center" : "hidden"} ${Isdiscount ? "text-Gray-400 order-2 line-through me-0 decoration-Red-400" : "text-Teal-600 lg:text-xl font-semibold"} `}> 
                        {price.toLocaleString()}  
                            <span className={`${Isdiscount ? "ms-0 hidden" : "ms-1"} md:text-sm md:flex justify-center items-center text-xs font-normal no-underline`}> تومان </span> 
                        </p>
                    </div>
                    <p className={`${Isavailable ? "hidden" : "flex"} text-Red-400 lg:text-xl md:text-lg text-base font-normal`}> فعلا موجود نیست 
                    </p>
                    <div>
                        <p className={`${Isdiscount ? "flex text-Teal-600 lg:text-xl md:text-lg text-base font-semibold order-1" : "hidden"} `}> 
                        {priceAfterDiscount.toLocaleString()} 
                            <span className='md:text-sm flex text-xs font-normal no-underline ms-1 mt-1'> تومان </span>
                        </p>
                    </div>
                </div>

                <div className='flex mt-4 text-Gray-400'>
                    <div className='bg-Gray-100 hover:bg-Teal-600 hover:text-white rounded-full md:h-9 md:w-9 w-6 h-6 relative'>
                        <ShoppingCartIcon className='absolute md:top-[8px] top-1 right-1 md:right-[6px] md:w-[22px] md:h-[22px] w-4 h-4' width={22} height={22}/>
                    </div>
                    <ArrowsRightLeftIcon className='hover:text-Teal-600 ms-5 mt-[6px] md:w-6 md:h-6 w-4 h-4' width={24} height={24} />
                    <div className='ms-auto text-left flex mt-[5px] text-xl cursor-default'>
                        <StarRating rate={rate} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
