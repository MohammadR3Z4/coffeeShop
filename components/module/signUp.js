import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

// icon 
import { XMarkIcon , PhoneIcon , UserIcon , AtSymbolIcon , LockClosedIcon } from '@heroicons/react/24/outline'
import Login from './logIn'

function SignUp( {IsModalOpen , setIsModalOpen , IsModalOpenHandeler , status , setStatus } ) {

    const temp = (e) => {
        if(e.target.id === "temp") {
            IsModalOpenHandeler()
        }
    }

    return (
        <>
            <div className={`${IsModalOpen && status === "signUp" ?  "fixed inset-0" : "hidden"} flex justify-center items-center z-20 bg-black/40 backdrop-blur-sm`} onClick={temp} id='temp'>
                <div className={` bg-white md:w-1/2 w-9/12 rounded-lg`}>
                    <div className='' >
                        <XMarkIcon className={`mt-4 ms-4 hover:bg-Gray-100 rounded-full cursor-pointer w-5 h-5`} 
                        onClick={IsModalOpenHandeler} width={20} height={20} />
                    </div>

                    <div className='container flex flex-col justify-center items-center mb-6'>
                        
                        <div className='flex gap-2'>
                            <Image src="/images/svgs/logo-type-gold.svg" width={100} height={40} alt='logo' />
                            <Image src="/images/svgs/logo.svg" width={40} height={40} alt='logo' />
                        </div>

                        <div className='flex gap-3 flex-col items-center'>
                            <p className='lg:text-4xl md:text-2xl text-lg font-semibold'> عضویت </p>
                            <p className='lg:text-xl md:text-lg text-base font-normal'> قبلا ثبت نام کرده اید ؟ 
                                <Link className='lg:text-xl md:text-lg text-base font-normal text-Orange-300 underline' href="#" 
                                onClick={ () => {
                                    setStatus("login") ;
                                }}> وارد شوید </Link>
                            </p>    
                        </div>

                        <div className='flex flex-col gap-3 mt-4 lg:w-1/2 w-9/12'>
                            <form>
                                <div className='flex flex-col gap-5'>
                                    <div className='relative'>
                                        <input className='border border-Gray-300 rounded-xl ps-2 pe-9 w-full h-14 focus:border-Gray-400 focus:outline-none text-Gray-400' type='text' placeholder='نام کاربری' />
                                        <UserIcon className='absolute top-4 left-2 text-Gray-400' width={25} height={25} />
                                    </div>

                                    <div className='relative'>
                                        <input className='border border-Gray-300 rounded-xl ps-2 pe-9 w-full h-14 focus:border-Gray-400 focus:outline-none text-Gray-400' type='text' placeholder='شماره موبایل' />
                                        <PhoneIcon className='absolute top-4 left-2 text-Gray-400' width={25} height={25} />
                                    </div>

                                    <div className='relative'>
                                        <input className='border border-Gray-300 rounded-xl ps-2 pe-9 w-full h-14 focus:border-Gray-400 focus:outline-none text-Gray-400' type='email' placeholder='آدرس ایمیل' />
                                        <AtSymbolIcon className='absolute top-4 left-2 text-Gray-400' width={25} height={25} />
                                    </div>

                                    <div className='relative'>
                                        <input className='border border-Gray-300 rounded-xl ps-2 pe-9 w-full h-14 focus:border-Gray-400 focus:outline-none text-Gray-400' type='password' placeholder='رمز عبور' />
                                        <LockClosedIcon className='absolute top-4 left-2 text-Gray-400' width={25} height={25} />
                                    </div>

                                </div>
                            </form>
                            <button className='flex items-center justify-center w-full h-14 rounded-xl bg-white text-Orange-300 border border-Orange-300 hover:bg-Orange-300 hover:text-white transition-colors lg:text-xl md:text-lg text-base'> تایید </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp
