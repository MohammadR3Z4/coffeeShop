import Image from 'next/image'
import React from 'react'

// icon
import { EllipsisHorizontalIcon , PhoneIcon } from '@heroicons/react/24/outline'

function SectionContactUs() {
    return (
        <div className='container lg:mt-[112px] md:mt-16 mt-7 flex md:flex-row flex-col'>
            <Image src="/images/contact.png" className='lg:w-[296px] lg:h-[305px] mx-auto' width={296} height={305} alt='contact' />
            <div className='ms-5 text-Zinc-700'>

                <p className='lg:text-5xl md:text-3xl text-2xl font-medium'>یکی از بهترین قهوه ها !</p>
                <p className='lg:text-3xl md:text-xl text-lg font-light md:mt-[6px] mt-0.5'>کیفیت قهوه را از ما بخواهید ...</p>
                <EllipsisHorizontalIcon className='w-6 my-6' />
                <p className='lg:text-2xl md:text-xl text-lg font-normal'>فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</p>

                <button className='flex rounded-[100px] border border-Orange-300 text-Orange-300 lg:text-2xl md:text-xl
                text-base font-normal px-6 py-[14px] mt-6 hover:bg-Orange-300 hover:text-white'>
                    <PhoneIcon className='me-2 my-auto md:w-auto md:h-auto w-[22px] h-[22px]' width={32} height={32} />
                    ثبت سفارش تلفنی
                </button>
            </div>
        </div>
    )
}

export default SectionContactUs
