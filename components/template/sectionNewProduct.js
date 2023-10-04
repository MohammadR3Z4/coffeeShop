import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ProductCard from '../module/productCard'
import Styles from "@/styles/sectionNewProduct.module.css"

// icon
import { ChevronLeftIcon } from "@heroicons/react/24/outline"


function SectionNewProduct() {
    return (
        <div className='flex'>
            <div className='bg-body-pattern bg-cover bg-no-repeat w-screen'>
                <div className='container mt-[192px]'>
                    <p className='text-Zinc-700 text-[48px] leading-[48px] font-medium'>جدیدترین محصولات</p>
                    <div className='flex justify-between mt-[6px]'>
                        <p className='text-Zinc-700 text-[30px] leading-[48px] font-medium'>فرآوری شده از دانه قهوه</p>
                        <Link className='flex text-Orange-300' href={"/#"}> 
                            <p className='text-xl font-normal  tracking-[-1.3px]'>مشاهده همه محصولات</p> <ChevronLeftIcon width={20} height={20} className='mt-1' /> 
                        </Link> 
                    </div>

                    <div className='mt-12 grid grid-cols-4 gap-5'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionNewProduct
