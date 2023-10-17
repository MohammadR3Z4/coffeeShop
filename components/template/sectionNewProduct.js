import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import database from "@/data/db.json"
import ProductCard from '../module/productCard'

// icon
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import QuickAccessCard from '../module/quickAccessCard'
import CategoryCard from '../module/categoryCard'


function SectionNewProduct() {
    return (
        <div className='flex font-Vazir'>
            <div className='lg:bg-body-pattern lg:bg-no-repeat bg-Gray-100 font-Vazir lg:bg-auto w-screen '>
                <div className='container lg:mt-[192px] md:mt-28 mt-8'>
                    <p className='text-Zinc-700 lg:text-[48px] lg:leading-[48px] font-medium md:text-4xl text-2xl'>جدیدترین محصولات</p>
                    <div className='flex justify-between mt-[6px]'>
                        <p className='text-Zinc-700 lg:text-[30px] lg:leading-[48px] md:text-2xl text-lg font-light'>فرآوری شده از دانه قهوه</p>
                        <Link className='flex text-Orange-300' href={"/#"}> 
                            <p className='lg:text-xl md:text-lg text-base font-normal flex rounded-[6px] md:h-10 py-[5px] px-3 lg:tracking-[-1.3px] hover:bg-Orange-200/20'>مشاهده همه <span className='md:ms-1 md:flex hidden'> محصولات </span> 
                            <ChevronLeftIcon width={20} height={20} className='mt-1 ms-1' /> 
                            </p> 
                        </Link> 
                    </div>

                    <div className='md:mt-12 mt-5 grid lg:grid-cols-4 grid-cols-2 gap-5'>
                        {database.products.slice(0,8).map(item => (
                            <ProductCard key={item.id} {...item} />
                        ))}
                    </div>

                    <div className='md:mt-20 mt-8 grid md:grid-cols-2 grid-cols-1 gap-5'>
                        {database.QuickAccess.map(item => (
                            <QuickAccessCard key={item.id} {...item} />
                        ))}             
                    </div>  
                    
                    <div className='md:mt-20 mt-10 grid md:grid-cols-5 grid-cols-3 mx-auto gap-[65px]'>
                        {database.Category.map( item => (
                            <CategoryCard key={item.id} {...item} />
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SectionNewProduct
