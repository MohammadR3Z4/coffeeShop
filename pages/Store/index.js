import React, { useEffect, useState } from 'react'

import Footer from '@/components/template/footer'
import Header from '@/components/template/header'
import ProductCard from '@/components/module/productCard'
import db from "@/data/db.json"

// icons
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SortItem = ( {item , value , setSort} ) => {
    return <div value={value} 
        onClick={() => {
        (e) => {setSort(e.target.value)} ;
        console.log(value);
        }} 
    className='text-Zinc-700 md:text-lg text-sm cursor-pointer'> {item} </div>
}

function Store() {

    // search
    const [inputSearch , setInputSearch] = useState("")
    const [products , setProducts] = useState([... db.products])

    useEffect( () => {

        const newProducts = db.products.filter((product) => product.tittle.includes(inputSearch)) ;
        setProducts(newProducts)

    }, [inputSearch] )

    // sort 
    const [sort , setSort] = useState("");

    useEffect( () => {
        if (sort === "highPrice") {
            const newProducts = [... products].sort((a , b) => a.price - b.price)
            setProducts(newProducts)
            console.log(newProducts);
            console.log("highhhhhhhh");
        } else if (sort === "lowPrice") {
            const newProducts = [... products].sort((a , b) => {
                if (Isavailable) {
                    a.price - b.price
                }
            })
            setProducts(newProducts)
        } else {
            const newProducts = [... products].sort((a , b) => b.rate - a.rate)
            setProducts(newProducts) 
            console.log("ratttttteeeeee");
        }
    }, [sort] )

    return (
        <div className='bg-Gray-100'>
            <Header />
            <div className='container'>
                <div className='flex flex-col md:mt-20 mt-10 font-Vazir'>
                    <p className='text-Zinc-700 lg:text-5xl md:text-3xl text-2xl font-medium'>فروشگاه</p>
                    <div className='mt-4'>
                        <p className='text-Zinc-700 lg:text-3xl md:text-xl text-lg font-light'>پیشنهاد قهوه خور ها ...</p>
                    </div>

                    <div className='flex justify-between items-center mt-10 w-full'>
                        <div className='flex gap-4'>
                            <p className='text-Zinc-700 lg:text-xl md:text-lg text-base font-light'> مرتب سازی : </p>
                            <SortItem item="منتخب" value="best" setSort={setSort} />
                            <SortItem item="گران ترین" value="highPrice" setSort={setSort} />
                            <SortItem item="ارزان ترین" value="lowPrice" setSort={setSort} />
                        </div>
                        
                        <div className='w-2/5 '>
                            <form>
                                <div className='w-full relative'>
                                    <input className='w-full h-12 rounded-xl ps-4 pe-10 focus:outline-none border border-Gray-400 text-Gray-400' type='text' placeholder='جستوجو کنید' 
                                    value={inputSearch} onChange={(e) => {setInputSearch(e.target.value)}} />
                                    <MagnifyingGlassIcon className='absolute left-2 top-3 text-Gray-400' width={24} height={24} />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                <div className='grid lg:grid-cols-4 grid-cols-2 gap-8 mt-14'>
                    {products.map(item => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Store
