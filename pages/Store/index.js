import React, { useEffect, useState } from 'react'

import Footer from '@/components/template/footer'
import Header from '@/components/template/header'
import ProductCard from '@/components/module/productCard'

// icons
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Store( { APIproducts } ) {

    // search
    const [inputSearch , setInputSearch] = useState("")
    const [products , setProducts] = useState([... APIproducts])

    useEffect( () => {
        const newProducts = [... APIproducts].filter((product) => product.tittle.includes(inputSearch)) ;
        setProducts(newProducts)
    }, [inputSearch] )

    // sort 
    const [sort , setSort] = useState("best");

    useEffect( () => {
        if (sort === "highPrice") {
            const newProducts = [... products].sort((a , b) => b.price - a.price)
            console.log("newProducts" , newProducts);
            setProducts(newProducts)
        } else if (sort === "lowPrice") {
            const newProducts = [... products].sort((a , b) => a.price - b.price)
            setProducts(newProducts) ;
        } else {
            const newProducts = [... products].sort((a , b) => b.rate - a.rate)
            setProducts(newProducts) 
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
                            <button onClick={() => {setSort("best")}} className={`${sort === "best" ? "text-Orange-300 underline" : "text-Zinc-700"} md:text-lg text-sm cursor-pointer`}>منتخب </button>
                            <button onClick={() => {setSort("highPrice")}} className={`${ sort === "highPrice" ? "text-Orange-300 underline" : "text-Zinc-700" }  md:text-lg text-sm cursor-pointer `}>گران ترین </button>
                            <button onClick={() => {setSort("lowPrice")}} className={`${sort === "lowPrice" ? "text-Orange-300 underline" : "text-Zinc-700"}  md:text-lg text-sm cursor-pointertext-Zinc-700`} >ارزان ترین </button>
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
                        <ProductCard key={item.id} item={... item} />
                    ))}
                </div>

            </div>

            <Footer />
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://mocki.io/v1/59cccc02-0126-40c7-862f-339195678773`)
    const data = await res.json()
   
    return { 
        props: { 
            APIproducts : data.products, 
        }
    }
}

export default Store
