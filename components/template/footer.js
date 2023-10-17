import Image from "next/image";
import Link from "next/link";
import React from "react";

// icons
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

function Footer() {
  return (
    <div className="bg-Zinc-700 lg:pt-[62px] md:px-10 pt-8 pb-[48px]">
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-12 ">
        <div className="flex flex-col container">
          <div className="flex flex-row">
            <Image
              src="/images/svgs/logo-gray.svg"
              width={57}
              height={54}
              alt="logo"
            />
            <Image
              className="ms-5"
              src="/images/svgs/logo-type.svg"
              width={138}
              height={54}
              alt="logo-type"
            />
          </div>
          <p className="text-Gray-300 lg:mt-[18px] mt-6 md:text-xl text-lg font-normal text-justify">
            ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات
            و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه
            در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت
            به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
          </p>
        </div>
        <div className=" lg:mt-7 mt-10 container">
          <p className="text-white text-2xl font-semibold">دسترسی سریع</p>

          <div className="grid grid-cols-2 gap-10 text-center text-Gray-300 ps-4">

            <ul className="mt-7 gap-5 flex flex-col xl:whitespace-nowrap list-disc">
              <li className="xl:text-xl md:text-lg text-base font-normal">
                <Link className="hover:text-Orange-300" href="#"> حریم خصوصی </Link>
              </li>
              <li className="xl:text-xl md:text-lg text-base font-normal">
                <Link className="hover:text-Orange-300" href="#"> عودت کالا </Link>
              </li>
              <li className="xl:text-xl md:text-lg text-base font-normal">
                <Link className="hover:text-Orange-300" href="#"> شرایط استفاده </Link>
              </li>
              <li className="xl:text-xl md:text-lg text-base font-normal">
                <Link className="hover:text-Orange-300" href="#"> ثبت سفارش </Link>
              </li>
            </ul>

            <ul className="mt-7 gap-5 flex flex-col list-disc">
              <li className=" md:text-lg text-base font-normal">
                <Link className="hover:text-Orange-300 whitespace-nowrap" href="#"> پرسش های متداول </Link>
              </li>
              <li className="lg:text-xl md:text-lg text-base font-normal">
                <Link className="hover:text-Orange-300 whitespace-nowrap" href="#"> فرصت های شغلی </Link>
              </li>
              <li className="xl:text-xl md:text-lg text-base font-normal">
                <Link className="hover:text-Orange-300 whitespace-nowrap" href="#"> ضمانت نامه ها </Link>
              </li>
              <li className="xl:text-xl md:text-lg text-base font-normal">
                <Link className="hover:text-Orange-300 whitespace-nowrap" href="#"> ارتباط با ما </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="mt-7 text-Gray-300 container">
          <p className="text-white text-2xl font-semibold">در تماس باشیم</p>
          <div className="flex mt-7">
            <MapPinIcon width={24} height={24} />
            <p className="lg:text-xl md:text-lg text-base font-normal ms-3">
              بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
            </p>
          </div>

          <div className="flex flex-col mt-5">

            <div className="flex flex-wrap xl:flex-row gap-5 flex-col">
              <div className="flex">
                <EnvelopeIcon
                  className="text-Orange-300 mt-1"
                  width={24}
                  height={24}
                />
                <p className="text-Orange-300 text-xl font-medium ms-3">
                  info@Coffee.com
                </p>
              </div>
              <div className="flex flex-row">
                <PhoneIcon className="text-Gray-300" width={24} height={24} />
                <p className="text-xl font-medium ms-3">0912-1234567</p>
                <p className="text-xl font-medium ms-3">021-7654321</p>
              </div>
            </div>

            <div className="flex justify-normal md:gap-4 gap-2 flex-wrap mt-5">
              <button className="border flex justify-center items-center border-Orange-200 my-auto py-[9px] lg:px-[30px] md:px-6 px-[15px] rounded-xl gap-1 text-Orange-200 lg:text-xl md:text-lg text-base font-medium directionLTR">
                <Image
                  className="md:w-[38px] md:h-[38px] w-[26px] h-[26px]"
                  src="images/svgs/instagram-orange.svg"
                  width={38}
                  height={38}
                  alt="instagram"
                />
                @golden_coffee
              </button>
              <button className="flex justify-center items-center gap-1 text-Zinc-700 py-[10px] md:px-[30px] px-[15px] rounded-xl bg-gradient-to-l from-Orange-300 to-Orange-200 lg:text-xl md:text-lg text-base font-medium directionLTR">
                <Image
                  className="md:w-[38px] md:h-[38px] w-[26px] h-[26px]"
                  src="images/svgs/telegram.svg"
                  width={38}
                  height={38}
                  alt="telegram"
                />
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
  );
}

export default Footer;
