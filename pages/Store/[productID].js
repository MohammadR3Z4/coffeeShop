import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link';

import Footer from '@/components/template/footer'
import Header from '@/components/template/header'
import StarRating from '@/components/module/starRating'
import Introduction from '@/components/module/commentSections/Introduction';
import Comments from '@/components/module/commentSections/comments';
import Questions from '@/components/module/commentSections/questions';
import FaqSection from '@/components/module/commentSections/FaqSection';
import db from '@/data/faq.json'


function SingleProductPage( { APIproducts } ) {
    
    const router = useRouter();
    const { productID } = router.query;

    // STATUS FOR COMMENTS SECTION 
    const [status , setStatus] = useState("Introduction") ;
    console.log("status" , status);

    // find the product from URL
    const product = APIproducts.find(item => item.id.toString() === productID);
    const priceAfterDiscount = product.price - ( product.price * product.discount ) / 100 ;

        return (
            <div className='bg-Gray-100 font-Vazir'>
                <Header />
                <div className='container py-12'>
                    <div className='flex md:flex-row flex-col gap-5'>
                        <div className='md:w-1/4 flex justify-center items-center'>
                            <Image className='md:w-auto md:h-auto' src={product.image} width={300} height={300} alt={product.tittle} />
                        </div>
                        <div className='md:w-3/4 flex flex-col'>
                            <p className='lg:text-3xl md:text-2xl text-xl font-semibold'> {product.tittle} </p>
                             <div className='flex flex-wrap gap-2 mt-4'>
                                 <div className='flex justify-center order-2 items-center'>
                                     <p className={`${product.Isavailable ? "flex justify-center items-center" : "hidden"} ${product.Isdiscount ? "text-Gray-400 order-2 line-through me-0 decoration-Red-400" : "text-Teal-600 lg:text-2xl text-lg font-semibold"} `}>
                                     {product.price}
                                     <span className={`${product.Isdiscount ? "ms-0 hidden" : "ms-1"} md:text-sm md:flex justify-center items-center lg:text-lg text-base font-normal no-underline`}> تومان </span>
                                 </p>
                             </div>
                             <p className={`${product.Isavailable ? "hidden" : "flex"} text-Red-400 lg:text-2xl md:text-lg text-base font-normal`}> فعلا موجود نیست
                             </p>
                                <div>
                                 <p className={`${product.Isdiscount ? "flex text-Teal-600 lg:text-2xl md:text-lg text-base font-semibold order-1" : "hidden"} `}>
                                     {priceAfterDiscount.toLocaleString()}
                                     <span className='md:text-sm flex lg:text-lg text-base font-normal no-underline ms-1 mt-1'> تومان </span>
                                 </p>
                             </div>
                         </div>
                         <div className='text-left flex text-xl cursor-default mt-4'>
                             <StarRating rate={product.rate} />
                         </div>
                         <div className=' flex justify-center mt-4'>
                                 <p className='text-justify lg:text-lg md:text-base text-sm'> {product.desc} </p>
                         </div>
                            <div className='md:w-1/2 w-3/4 bg-white text-Orange-300 border border-Orange-300 flex justify-center items-center mx-auto md:mx-0 mt-8 cursor-pointer hover:bg-Orange-300 hover:text-white'>
                             <button className='font-Vazir py-2 lg:text-xl text-base'> افزودن به سبد خرید </button>
                         </div>
                     </div>
                 </div>
             </div>

             <div className='my-10 container'>
                <ul className='flex gap-8'>
                    <li className={`${status === "Introduction" ? "text-Orange-300" : "text-gray-500"} lg:text-xl md:text-lg text-base font-semibold cursor-pointer`} 
                    onClick={() => {setStatus("Introduction")}} > معرفی </li>
                    <li className={`${status === "Comments" ? "text-Orange-300" : "text-gray-500"} lg:text-xl md:text-lg text-base font-semibold cursor-pointer`} 
                    onClick={() => {setStatus("Comments")}} > نظرات </li>
                    <li className={`${status === "Questions" ? "text-Orange-300" : "text-gray-500"} lg:text-xl md:text-lg text-base font-semibold cursor-pointer`} 
                    onClick={() => {setStatus("Questions")}} > پرسش ها </li>
                    <li className={`${status === "Faq" ? "text-Orange-300" : "text-gray-500"} lg:text-xl md:text-lg text-base font-semibold cursor-pointer`} 
                    onClick={() => {setStatus("Faq")}} > سوالات متداول </li>
                </ul>
                <div className='border border-Gray-400 w-full h-[1px] my-7'></div>
                
                <Introduction status={status} />
                <Comments status={status} />
                <Questions status={status} />

                <div className='flex flex-col gap-5'>
                    {db.FAQ.map(item => (
                        <FaqSection key={item.id} {... item} status={status} />
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

export async function getStaticPaths() {
    const res = await fetch(`https://mocki.io/v1/59cccc02-0126-40c7-862f-339195678773`)
    const data = await res.json() 

    const productID = data.products.map( item => item.id ) 
    const paths = productID.map(id => ({params: { productID: id.toString() }}));

    return {
        paths ,      
        fallback: false,
    } 
}

export default SingleProductPage
