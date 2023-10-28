import React from 'react'
import ProductCard from '../module/productCard'
import CofeeClub from './cofeeClub'
import { useEffect, useState } from 'react'

// overwrite css 
import styles from "@/styles/swiper.module.css"

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function SectionBestSelling( ) {

    // AXIOS API 
    const axios = require('axios');

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getUser() {
            try {
              const response = await axios.get('https://mocki.io/v1/59cccc02-0126-40c7-862f-339195678773');
              setProducts(response.data.products)
            } catch (error) {
              console.error(error);
            }
        }
        getUser()
    }, []);


    const [windowSize, setWindowSize] = useState({ width: 0 });
    const [countOfSlides , setcountOfSlides] = useState(4)

    // Add an event listener to update the window size whenever it changes.
    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            setWindowSize({
                width,
                height: window.innerHeight,
            });

            if (width < 640) {
                setcountOfSlides(1); 
            } else if (width < 768) {
                setcountOfSlides(2); 
            } else if (width < 1024) {
                setcountOfSlides(3); 
            } else {
                setcountOfSlides(4); 
            }
        }
      
  
      // Initial window size setup
      handleResize();
  
      // Add event listener
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener('resize', handleResize);
        
      };
      
    }, []);

    return (
        <div className='container flex flex-col md:mt-20 mt-10 bg-Gray-100 font-Vazir'>
            <p className='text-Zinc-700 lg:text-5xl md:text-3xl text-2xl font-medium'>محصولات پر فروش</p>
            <div className='mt-4'>
                <p className='text-Zinc-700 lg:text-3xl md:text-xl text-lg font-light'>پیشنهاد قهوه خور ها ...</p>
            </div>

            <div className='mt-12'>
            <Swiper
                slidesPerView={countOfSlides}
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                modules={[FreeMode , Navigation]}
            >
                {products.slice(8).map(item => (
                    <SwiperSlide key={item.id}>
                        <ProductCard  item={...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    )
}

export default SectionBestSelling
