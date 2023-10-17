import Link from 'next/link'
import React from 'react'
import db from "@/data/db.json"

// icon 
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Blog from '../module/blog'

function BlogContainer() {
    return (
        <div className='container mt-20'>
            <div className='flex justify-between'>
                <p className='text-Zinc-700 lg:text-5xl md:text-3xl text-2xl font-medium'>مطالب خواندنی</p>
                <Link className='text-Orange-300 md:text-xl text-base font-normal flex' href="/blog">مشاهده همه مطالب
                <ChevronLeftIcon className='md:mt-2 mt-1 ms-1' width={20} height={20}/>
                </Link>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:mt-12 md:mt-8 mt-5'>
                {db.Blog.map(item => (
                    <Blog key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default BlogContainer
