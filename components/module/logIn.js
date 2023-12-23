import Image from 'next/image'
import Link from 'next/link'
import React , { useState } from 'react'

import SignUp from './signUp';
import EnterCode from './enterCode';

// icon 
import { XMarkIcon , PhoneIcon } from '@heroicons/react/24/outline'

// formik
import { Formik, Field, Form } from "formik";

// yup 
import * as Yup from 'yup';

function Login( {IsModalOpen , setIsModalOpen , IsModalOpenHandeler , status , setStatus} ) {

    // YUP function
    const SignupSchema = Yup.object().shape({
        username: Yup.string() 
            .min(11, "لطفا یک شماره موبایل معتبر وارد کنید.")
            .max(11, "لطفا یک شماره موبایل معتبر وارد کنید.")
            .matches(/[0-9]/ , "لطفا یک شماره موبایل معتبر وارد کنید.")
            .required("لطفا این قسمت را خالی نگذارید"),
    });

    const [valuePhoneNumber , setValuePhoneNumber] = useState('')

    // POST METHODE
    async function postHandler(e) {
        
        e.preventDefault()

        console.log("test asssst");
        console.log("value" , valuePhoneNumber);

        const axios = require('axios');
        axios.post('http://79.175.189.123:6003/api/user/register', {
            username: valuePhoneNumber 
        } , {
            headers: {
                'accept': 'application/json' ,
                'content-Type' : 'application/json'
            }
        })
        .then(function (response) {
            console.log("true");
            console.log("response" , response);
            setStatus("enterCode")
        }).catch(function (error) {
            console.log("false");
            console.log(error);
            setStatus("enterCode")
        });
    }


    // temp
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

                    <Formik
                        initialValues={{ username: ""}}
                        validationSchema={SignupSchema}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                    {({ errors, touched }) => (
                        <Form onSubmit={postHandler} >
                            <div className='relative'>
                                <Field className='border z-10 border-Gray-300 rounded-xl ps-2 pe-9 w-full h-14 focus:border-Gray-400 focus:outline-none text-Gray-400' type='text' value={valuePhoneNumber} placeholder='شماره موبایل' name='username' onChange={ (e) => setValuePhoneNumber(e.target.value)} />
                                {errors.username && touched.username ? (
                                    <div className='text-Red-400 mt-1'>{errors.username}</div>
                                ) : null}
                                <PhoneIcon className='absolute top-4 left-2 text-Gray-400' width={25} height={25} />
                            </div>
                            <button type='submit' className='flex items-center justify-center w-full h-14 rounded-xl bg-white text-Orange-300 border border-Orange-300 hover:bg-Orange-300 hover:text-white transition-colors lg:text-xl md:text-lg text-base mt-4'> تایید </button>
                        </Form>
                    )}
                    </Formik>

                    </div>
                </div>
            </div>
        </div>

            
        <SignUp IsModalOpen={IsModalOpen} setIsModalOpen={setIsModalOpen} IsModalOpenHandeler={IsModalOpenHandeler} status={status} setStatus={setStatus} /> 
        <EnterCode IsModalOpen={IsModalOpen} setIsModalOpen={setIsModalOpen} IsModalOpenHandeler={IsModalOpenHandeler} status={status} setStatus={setStatus} valuePhoneNumber={valuePhoneNumber} postHandler={postHandler} /> 
        

        </>
    )
}

export default Login
