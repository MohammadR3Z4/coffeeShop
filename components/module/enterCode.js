import React, { useState , useEffect , useRef } from 'react'
import Image from 'next/image'

import Login , { postHandler } from './logIn'

// icon
import { ArrowSmallRightIcon , ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'

// formik
import { Formik, Field, Form } from "formik";

// yup 
import * as Yup from 'yup';

function EnterCode( { IsModalOpen , setIsModalOpen , IsModalOpenHandeler , status , setStatus , valuePhoneNumber , postHandler } ) {

    // count down 
    const Ref = useRef(null);
 
    const [timer, setTimer] = useState('00:00');
 
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        setTotal(total)
        return {
            total, minutes, seconds
        };
    }

    const [total , setTotal] = useState()

    const startTimer = (e) => {
        let { total,  minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
 
    const clearTimer = (e) => { 
        setTimer('00:00');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
 
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 120 );
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, [status]);
 
    function onClickReset() {
        clearTimer(getDeadTime());
    }
  

    // yup 
    const SignupSchema = Yup.object().shape({
        code: Yup.string()
          .min(5, "کد وارد شده نامعتبر میباشد")
          .max(5, "کد وارد شده نامعتبر میباشد")
          .required("لطفا این قسمت را خالی نگذارید"),
    });

    // temp
    const temp = (e) => {
        if(e.target.id === "temp") {
            IsModalOpenHandeler()
        }
    }

    return (
        <>
            <div className={`${IsModalOpen && status === "enterCode" ?  "fixed inset-0" : "hidden"} z-20 bg-black/40 backdrop-blur-sm flex justify-center items-center`} onClick={temp} id='temp'>
            <div className={`bg-white md:w-1/2 w-9/12 rounded-lg`}>
                <div className='' >
                    <ArrowSmallRightIcon className={`mt-4 ms-4 hover:bg-Gray-100 rounded-full cursor-pointer w-5 h-5`} 
                    onClick={() => setStatus("login")} width={20} height={20} />
                </div>

                <div className='container flex flex-col justify-center items-center mb-6'>
                    
                    <div className='flex gap-2'>
                        <Image src="/images/svgs/logo-type-gold.svg" width={100} height={40} alt='logo' />
                        <Image src="/images/svgs/logo.svg" width={40} height={40} alt='logo' />
                    </div>

                    <div className='flex gap-3 flex-col items-center'>
                        <p className='lg:text-4xl md:text-2xl text-lg font-semibold'> کد تایید </p>
                        <p className='lg:text-xl md:text-lg text-base font-normal text-Gray-400'> کد تایید برای {valuePhoneNumber} ارسال شد. </p>    
                    </div>

                    <div className='flex flex-col gap-3 mt-4 lg:w-1/2 w-9/12'>

                    <Formik
                        initialValues={{ code: ""}}
                        validationSchema={SignupSchema} 
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                    {({ errors , touched }) => (
                        <Form>
                            <div className='relative'>
                                <Field className='border border-Gray-300 rounded-xl ps-2 pe-9 w-full h-14 focus:border-Gray-400 focus:outline-none text-Gray-400' type='text' placeholder='کد تایید' name='code' />
                                {errors.code && touched.code ? (
                                    <div className='text-Red-400 mt-1'>{errors.code}</div>
                                ) : null}
                                <ChatBubbleLeftEllipsisIcon className='absolute top-4 left-2 text-Gray-400' width={25} height={25} />
                            </div>
                            <button type='submit' className='flex items-center justify-center w-full h-14 rounded-xl bg-white text-Orange-300 border border-Orange-300 hover:bg-Orange-300 hover:text-white transition-colors lg:text-xl md:text-lg text-base mt-4'> تایید </button>
                        </Form>
                    )}
                    </Formik>

                    </div>


                    <div className='flex justify-end items-end mt-4'>
                        { total > 0 ?  (
                            <h2 className='text-Gray-400'>{timer}</h2>
                        ) : (
                            <button onClick={postHandler}>
                                 <p onClick={onClickReset}> ارسال دوباره </p> 
                            </button>
                        ) }
                    </div>

                </div>
            </div>
        </div>

        </>
    )
}

export default EnterCode
