import Image from 'next/image'
import React from 'react'

// icon
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

const ClubItems = ( {text , image} ) => {
    return (
        <div className='bg-white text-Emerald-600 md:w-[98px] md:h-[98px] w-[72px] h-[72px] flex flex-col justify-center items-center rounded-2xl'>
            <Image className='md:w-12 md:h-12 w-10 h-10' src={image} width={48} height={48} alt={text} />
            <p className='font-normal md:text-sm text-xs md:mt-[6px] mt-[3px]'> {text} </p>
        </div>
    )
}

function CofeeClub() {
    return (
        <div className='font-Vazir flex flex-wrap justify-between container bg-gradient-to-l from-Emerald-600 from-90% to-Emerald-500 rounded-2xl mt-20 md:px-11 px-3 py-6'>

            <div className='flex text-white'>
                <Image src="/images/club/diamond.png" width={110} height={98} alt='diamond' />
                <div className='flex-col mt-[2px] ms-6'>
                    <p className='lg:text-5xl md:text-3xl text-2xl font-bold'>کافی کلاب</p>
                    <p className='lg:text-2xl md:text-xl text-lg font-light md:mt-2 mt-1'>میدونستی میتونی با امتیاز هات قهوه بگیری ؟</p>
                </div>
            </div>

            <div className='flex justify-around items-center sm:w-auto w-full xl:order-1 md:order-2 order-1 flex-wrap mt-5  lg:gap-5 md:gap-3 gap-2'>
                <ClubItems text="چرخ و بخت" image="/images/club/Discovery.svg" />
                <ClubItems text="ماموریت ها" image="/images/club/Activity.svg" />
                <ClubItems text="جایزه ها" image="/images/club/Ticket-Star.svg" />
            </div>

            <div className='flex sm:flex-col flex-row sm:justify-normal sm:w-max w-full gap-4 sm:gap-0 items-center xl:order-2 order-1 mt-5 text-white'>
                <p className='md:text-[30px] text-2xl font-semibold '>542</p>
                <p className='md:text-sm text-xs font-normal mt-1'>امتیـــــــاز شما</p>
                <button className='flex justify-center items-center bg-gradient-to-l from-Orange-300 to-Orange-200 md:py-[6px]  py-1 md:mt-2 mt-1 rounded-[100px] ps-[10px] pe-1 md:text-sm text-xs font-medium'>دریافت جایزه
                <ChevronLeftIcon className='md:w-6 md:h-6 w-5 h-5 mt-1' width={24} height={24} />
                </button>
            </div>

        </div>
    )
}

export default CofeeClub
