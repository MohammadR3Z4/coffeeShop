import Image from 'next/image'
import React from 'react'

// icon
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

const ClubItems = ( {text , image} ) => {
    return (
        <div className='bg-white text-Emerald-600 w-[98px] h-[98px] flex flex-col justify-center items-center rounded-2xl'>
            <Image src={image} width={48} height={48} alt={text} />
            <p className='font-normal text-sm mt-[6px]'> {text} </p>
        </div>
    )
}

function CofeeClub() {
    return (
        <div className='flex justify-between container py-6 bg-gradient-to-l from-Emerald-600 from-90% to-Emerald-500 rounded-2xl mt-20 px-11'>
            <div className='flex text-white'>
                <Image src="/images/club/diamond.png" width={110} height={98} alt='diamond' />
                <div className='flex-col mt-[2px] ms-6'>
                    <p className='text-5xl font-bold'>کافی کلاب</p>
                    <p className='text-2xl font-light mt-2'>میدونستی میتونی با امتیاز هات قهوه بگیری ؟</p>
                </div>

            </div>
            <div className='flex gap-5'>
                <ClubItems text="چرخ و بخت" image="/images/club/Discovery.svg" />
                <ClubItems text="ماموریت ها" image="/images/club/Activity.svg" />
                <ClubItems text="جایزه ها" image="/images/club/Ticket-Star.svg" />
            </div>
            <div className='flex flex-col text-white'>
                <p className='text-[30px] font-semibold '>542</p>
                <p className='text-sm font-normal mt-1'>امتیـــــــاز شما</p>
                <button className='bg-gradient-to-l flex from-Orange-300 to-Orange-200 px-[6px] h-8 mt-2 rounded-[100px] ps-[10px]'>دریافت جایزه
                <ChevronLeftIcon className='my-auto' width={24} height={24} />
                </button>
            </div>
        </div>
    )
}

export default CofeeClub
