import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import database from "@/data/db.json"
import ProductCard from '../module/productCard'

// icon
import { ChevronLeftIcon } from "@heroicons/react/24/outline"


function SectionNewProduct() {
    return (
        <div className='flex'>
            <div className='bg-body-pattern bg-cover bg-no-repeat w-screen max-h-[818px]'>
                <div className='container mt-[192px]'>
                    <p className='text-Zinc-700 text-[48px] leading-[48px] font-medium'>جدیدترین محصولات</p>
                    <div className='flex justify-between mt-[6px]'>
                        <p className='text-Zinc-700 text-[30px] leading-[48px] font-medium'>فرآوری شده از دانه قهوه</p>
                        <Link className='flex text-Orange-300' href={"/#"}> 
                            <p className='text-xl font-normal flex rounded-[6px] h-10 py-[5] px-3 tracking-[-1.3px] hover:bg-Orange-200/20'>مشاهده همه محصولات 
                            <ChevronLeftIcon width={20} height={20} className='mt-2 ms-1' /> 
                            </p> 
                        </Link> 
                    </div>

                    <div className='mt-12 grid grid-cols-4 gap-5'>
                        {database.products.map(item => (
                            <ProductCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionNewProduct
