import React, { useState } from "react";
import Image from "next/image";

// icons
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
  HomeIcon,
  ShoppingBagIcon,
  ChatBubbleLeftEllipsisIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  PhoneArrowUpRightIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

function Resnavbar({ status }) {

    const [IsopenSubmenu , setIsopenSubmenu] = useState(false)
    const IsopenSubmenuHandeler = () => { setIsopenSubmenu(!IsopenSubmenu) } 

    const [IsopenMenu , setIsopenMenu] = useState(false)
    const IsopenMenuHandeler = () => { setIsopenMenu(!IsopenMenu) }

  return (
    <>
      <div className={`bg-white h-16 md:hidden flex justify-between py-3 px-4`}>
        <div>
          <Bars3Icon onClick={IsopenMenuHandeler} className="mt-2 cursor-pointer" width={24} height={24} />
        </div>
        <div>
          <Image
            className="text-Orange-300 hover:stroke-current"
            src="/images/svgs/logo-type.svg"
            width={100}
            height={40}
            alt="logo-type"
          />
        </div>
        <div>
          <ShoppingCartIcon className="mt-2" width={24} height={24} />
        </div>
      </div>
      <div className={`${IsopenMenu ? "flex" : "hidden"} w-[256px] px-4 bg-white h-screen md:hidden flex-col z-50 absolute top-0 right-0`}>
        <div className="flex flex-row justify-between mt-3 mb-5">
          <Image
            className="me-3"
            src="/images/svgs/logo.svg"
            width={40}
            height={40}
            alt="logo"
          />
          <Image
            src="/images/svgs/logo-type.svg"
            width={110}
            height={40}
            alt="logo"
          />
          <XMarkIcon
            onClick={IsopenMenuHandeler}
            className="mt-[14px] cursor-pointer"
            width={20}
            height={20}
          />
        </div>

        {/*  ************** Nav bar ************* */}

        <div className="border w-[224px] h-0 text-Gray-100"></div>
        <ul className="mt-6 flex flex-col gap-6 ms-[10px]">
          <li className={`text-base font-normal flex ${status == "homePage" ? "bg-Orange-200/20 text-Orange-300 mt-2 p-[10px]" : "bg-none text-Zinc-700 p-0"} rounded-[6px]`}>
            <HomeIcon className="me-2" width={20} height={20} />
            <Link className="" href="/">
              صفحه اصلی
            </Link>
          </li>
          <li className={`text-base font-normal flex flex-wrap cursor-pointer ${status == "shopping" ? "bg-Orange-200/20 text-Orange-300 mt-2 p-[10px]" : "bg-none text-Zinc-700 p-0"} rounded-[6px]`} onClick={IsopenSubmenuHandeler}>
            <ShoppingBagIcon className="me-2" width={20} height={20} />{" "}
            <Link href="#">
              فروشگاه
            </Link>
            <ChevronDownIcon className={`ms-auto ${IsopenSubmenu ? "rotate-180" : ""}`} width={16} height={16} />
            <ul className={`ms-7 gap-3 flex-col w-full mt-3 ${IsopenSubmenu ? "flex" : "hidden"}`}>
                <li className="text-Zinc-600 text-sm font-normal" ><Link href="/shopping">قهوه ویژه</Link></li>
                <li className="text-Zinc-600 text-sm font-normal" ><Link href="/shopping">ویژه در سطح جهانی</Link></li>
                <li className="text-Zinc-600 text-sm font-normal" ><Link href="/shopping">قهوه درجه یک</Link></li>
                <li className="text-Zinc-600 text-sm font-normal" ><Link href="/shopping">ترکیبات تجاری</Link></li>
                <li className="text-Zinc-600 text-sm font-normal" ><Link href="/shopping">کپسول قهوه</Link></li>
                <li className="text-Zinc-600 text-sm font-normal" ><Link href="/shopping">قهوه زینو برزیلی</Link></li>
            </ul>
          </li>
          <li className="flex">
            <ChatBubbleLeftEllipsisIcon
              className="me-2"
              width={20}
              height={20}
            />{" "}
            <Link className="text-base text-Zinc-700 font-normal" href="#">
              {" "}
              دیکشنری{" "}
            </Link>
          </li>
          <li className="flex">
            {" "}
            <BriefcaseIcon className="me-2" width={20} height={20} />{" "}
            <Link className="text-base text-Zinc-700 font-normal" href="#">
              {" "}
              درباره ما{" "}
            </Link>
          </li>
          <li className="flex">
            {" "}
            <DocumentTextIcon className="me-2" width={20} height={20} />{" "}
            <Link className="text-base text-Zinc-700 font-normal" href="#">
              {" "}
              بلاگ{" "}
            </Link>
          </li>
          <li className="flex">
            {" "}
            <PhoneArrowUpRightIcon
              className="me-2"
              width={20}
              height={20}
            />{" "}
            <Link className="text-base text-Zinc-700 font-normal" href="#">
              {" "}
              تماس با ما{" "}
            </Link>
          </li>
        </ul>

      </div>
    </>
  );
}

export default Resnavbar;
