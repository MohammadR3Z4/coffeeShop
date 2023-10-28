import Link from 'next/link'
import React, { useEffect , useState} from 'react'
import Blog from '../module/blog'

// icon 
import { ChevronLeftIcon } from '@heroicons/react/24/outline'


function BlogContainer() {

    const axios = require('axios');

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        async function getUser() {
            try {
              const response = await axios.get('https://mocki.io/v1/59cccc02-0126-40c7-862f-339195678773');
              setBlog(response.data.Blog)
            } catch (error) {
              console.error(error);
            }
        }
        getUser()
    }, []);



    return (
        <div className='container mt-20'>
            <div className='flex justify-between'>
                <p className='text-Zinc-700 lg:text-5xl md:text-3xl text-2xl font-medium'>مطالب خواندنی</p>
                <Link className='text-Orange-300 md:text-xl text-base font-normal flex' href="/blog">مشاهده همه مطالب
                <ChevronLeftIcon className='md:mt-2 mt-1 ms-1' width={20} height={20}/>
                </Link>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:mt-12 md:mt-8 mt-5'>
                {blog.map(item => (
                    <Blog key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default BlogContainer