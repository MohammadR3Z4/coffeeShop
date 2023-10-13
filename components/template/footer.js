import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// icons 
import { MapPinIcon , EnvelopeIcon , PhoneIcon } from '@heroicons/react/24/outline'

function Footer() {
    return (
        <div className='bg-Zinc-700 pt-[62px] pb-[48px] px-24'>
            <div className='grid grid-cols-3'>
                <div className='flex flex-col'>
                    <div className='flex flex-row'>
                        <Image src="/images/svgs/logo-gray.svg" width={57} height={54} />
                        <Image className='ms-5' src="/images/svgs/logo-type.svg" width={138} height={54} />
                    </div>
                    <p className='text-Gray-300 mt-[18px] text-xl font-normal text-justify'>ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.</p>
                </div>
                <div className='xl:ms-[112px] lg:ms-16 mt-7'>
                    <p className='text-white text-2xl font-semibold'>دسترسی سریع</p>
                    <div className='grid grid-cols-2 text-Gray-300 '>
                        <ul className='mt-7 gap-5 flex flex-col list-disc'>
                            <li className='text-xl font-normal'><Link href="#"> حریم خصوصی </Link></li>
                            <li className='text-xl font-normal'><Link href="#"> عودت کالا </Link></li>
                            <li className='text-xl font-normal'><Link href="#"> شرایط استفاده </Link></li>
                            <li className='text-xl font-normal'><Link href="#"> ثبت سفارش </Link></li>
                        </ul>
                        <ul className='mt-7 gap-5 flex flex-col list-disc'>
                            <li className='text-xl font-normal'><Link href="#"> پرسش های متداول </Link></li>
                            <li className='text-xl font-normal'><Link href="#"> فرصت های شغلی </Link></li>
                            <li className='text-xl font-normal'><Link href="#"> ضمانت نامه ها </Link></li>
                            <li className='text-xl font-normal'><Link href="#"> ارتباط با ما </Link></li>
                        </ul>
                    </div>
                </div>
                <div className='xl:ms-[80px] md:ms-10 mt-7 text-Gray-300'>
                    <p className='text-white text-2xl font-semibold'>در تماس باشیم</p>
                    <div className='flex mt-7'>
                        <MapPinIcon width={24} height={24} />
                        <p className='text-xl font-normal ms-3'>بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳</p>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <div className='flex flex-wrap xl:flex-row flex-col'>
                            <div className='flex'>
                                <EnvelopeIcon className='text-Orange-300 mt-1' width={24} height={24} />
                                <p className='text-Orange-300 text-xl font-medium ms-3'>info@Coffee.com</p>
                            </div>
                            <div className='flex flex-row ms-5'>
                                <PhoneIcon className='text-Gray-300' width={24} height={24} />
                                <p className='text-xl font-medium ms-3'>0912-1234567</p>
                                <p className='text-xl font-medium ms-3'>021-7654321</p>
                            </div>
                        </div>
                        <div className='mt-10 flex flex-wrap'>
                            <button className='border border-Orange-200 my-auto py-[9px] px-[30px] rounded-xl flex text-Orange-200 text-xl font-medium'>
                            <Image className='ms-2' src="images/svgs/instagram-orange.svg" width={38} height={38} />
                            @golden_coffee 
                            </button>
                            <button className='flex text-Zinc-700 py-[10px] px-[30px] rounded-xl ms-3 bg-gradient-to-l from-Orange-300 to-Orange-200 text-xl font-medium'>
                            <Image className='me-2' src="images/svgs/telegram.svg" width={38} height={38} />
                            @golden_coffee
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            {/* 
            <div className='w-full border border-black/10 h-[1px] mt-11'></div>

            <div>
                <p></p>
                <p> © MohammadReza Ghasemnejad 2023. All rights reserved . </p>
            </div> 
            */}
        </div>
    )
}

export default Footer
