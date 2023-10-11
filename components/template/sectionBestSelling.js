import React from 'react'
import db from "@/data/db.json"
import ProductCard from '../module/productCard'

// overwrite css 
import styles from "@/styles/swiper.module.css"

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function SectionBestSelling() {
    return (
        <div className='container flex flex-col mt-20'>
            <p className='text-Zinc-700 text-5xl font-medium'>محصولات پر فروش</p>
            <div className='mt-4'>
                <p className='text-Zinc-700 text-3xl font-light'>پیشنهاد قهوه خور ها ...</p>
            </div>

            <div className='mt-12'>
            <Swiper className={styles["mySwiper"]}
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                modules={[FreeMode , Navigation]}
            >
                {db.products.slice(8).map(item => (
                    <SwiperSlide key={item.id}>
                        <ProductCard  {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    )
}

export default SectionBestSelling
