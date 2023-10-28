import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import SignUp from './signUp';

// icon 
import { XMarkIcon , PhoneIcon } from '@heroicons/react/24/outline'

// // AXIOS
// import axios from 'axios';

function Login( {IsModalOpen , setIsModalOpen , IsModalOpenHandeler , status , setStatus} ) {

    const [inputValue , setInputValue] = useState("")

    console.log("inputValue" , inputValue);

    // async function handler(req , res , inputValue) {
    //     try {
    //         const response = await axios.post('https://mocki.io/v1/59cccc02-0126-40c7-862f-339195678773', {
    //             phoneNumbers : [
    //                { phoneNumber : "asfd" } ,
                   
    //             ]
    //         });
    //         console.log(response.data);
    //         res.status(200).json(response.data);
    //     } catch (error) {
    //       console.log(error);
    //       res.status(error.response.status).json({ message: error.message });
    //     }
    // }

    const temp = (e) => {
        if(e.target.id === "temp") {
            IsModalOpenHandeler()
        }
    }

    return (
        <>
        <div className={`${IsModalOpen && status === "login" ?  "fixed inset-0" : "hidden"} z-20 bg-black/40 backdrop-blur-sm flex justify-center items-center`} onClick={temp} id='temp'>
            <div className={`bg-white md:w-1/2 w-9/12 rounded-lg`}>
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
                        <p className='lg:text-4xl md:text-2xl text-lg font-semibold'> ورود </p>
                        <p className='lg:text-xl md:text-lg text-base font-normal'> حساب کاربری ندارید ؟ 
                            <Link className='lg:text-xl md:text-lg text-base font-normal text-Orange-300 underline' href="#" onClick={() => {
                                setStatus("signUp") ;
                            }} > ثبت نام </Link>
                        </p>    
                    </div>

                    <div className='flex flex-col gap-3 mt-4 lg:w-1/2 w-9/12'>
                        <form >
                            <div className='relative'>
                                <input className='border border-Gray-300 rounded-xl ps-2 pe-9 w-full h-14 focus:border-Gray-400 focus:outline-none text-Gray-400' type='text' placeholder='شماره موبایل' 
                                onChange={(e) => setInputValue(e.target.value)} />
                                <PhoneIcon className='absolute top-4 left-2 text-Gray-400' width={25} height={25} />
                            </div>
                            <button type='submit' className='flex items-center justify-center w-full h-14 rounded-xl bg-white text-Orange-300 border border-Orange-300 hover:bg-Orange-300 hover:text-white transition-colors lg:text-xl md:text-lg text-base mt-4'> تایید </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

            
        <SignUp IsModalOpen={IsModalOpen} setIsModalOpen={setIsModalOpen} IsModalOpenHandeler={IsModalOpenHandeler} status={status} setStatus={setStatus} /> 

        </>
    )
}

export default Login
