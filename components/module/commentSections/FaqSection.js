import React, { useState } from 'react'

// icons
import { ChevronDownIcon , ChevronUpIcon } from '@heroicons/react/24/outline'

function FaqSection({status , question , answer}) {

    const [isOpen , setIsOpen] = useState(false)
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`${status === "Faq" ? "flex flex-col" : "hidden"} gap-4 `}>
            <div onClick={toggleOpen} className='flex flex-col justify-center cursor-pointer py-4 px-3 border border-Gray-400 w-full rounded-2xl'>
                <div className='flex justify-between items-center'>
                    <p className='md:text-xl text-lg '> {question} </p>
                    <ChevronDownIcon className={`${isOpen ? "hidden" : "block"}`} width={20} height={20} />
                    <ChevronUpIcon className={`${isOpen ? "block" : "hidden"}`} width={20} height={20} />
                </div>
                <div>
                    <p className={`${isOpen ? "block" : "hidden"} md:text-base text-sm mt-3 font-medium text-gray-500`}> {answer} </p>
                </div>
            </div> 
        </div>
    )
}

export default FaqSection
