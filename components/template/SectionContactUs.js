import Image from 'next/image'
import React from 'react'

// icon
import { EllipsisHorizontalIcon , PhoneIcon } from '@heroicons/react/24/outline'

function SectionContactUs() {
    return (
        <div className='container mt-[112px] flex'>
            <Image src="/images/contact.png" width={296} height={305} />
            <div className='ms-5 text-Zinc-700'>
                <p className='text-5xl font-medium'>یکی از بهترین قهوه ها !</p>
                <p className='text-3xl font-light mt-[6px]'>کیفیت قهوه را از ما بخواهید ...</p>
                <EllipsisHorizontalIcon className='w-6 my-6' />
                <p className='text-2xl font-normal '>فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</p>
                <button className='flex rounded-[100px] border border-Orange-300 text-Orange-300 text-2xl font-normal px-6 py-[14px] mt-6 hover:bg-Orange-300 hover:text-white'>
                <PhoneIcon className='me-2 my-auto' width={32} height={32} />
                ثبت سفارش تلفنی
                </button>
            </div>
        </div>
    )
}

export default SectionContactUs
