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
                <p className='text-Zinc-700 text-5xl font-medium'>مطالب خواندنی</p>
                <Link className='text-Orange-300 text-xl font-normal flex' href="/blog">مشاهده همه مطالب
                <ChevronLeftIcon className='mt-2 ms-1' width={20} height={20}/>
                </Link>
            </div>

            <div className='grid grid-cols-4 mt-12'>
                {db.Blog.map(item => (
                    <Blog key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default BlogContainer
