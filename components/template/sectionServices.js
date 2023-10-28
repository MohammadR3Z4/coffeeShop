import React , { useEffect , useState} from 'react'
import Image from 'next/image'

const Service = ( props ) => {
    const item = props.item
    return (
        <div className='flex lg:flex-row flex-col justify-center items-center'>
            <Image src={item.image} width={66} height={73} alt={item.title} />
            <div className='text-Zinc-700 ms-4 lg:mt-0 mt-5'>
                <p className='lg:text-lg md:text-base text-sm font-semibold'> {item.title} </p>
                <p className='md:text-sm text-xs font-normal lg:mt-[14px] md:mt-2 mt-1'> {item.subtitle} </p>
            </div>
        </div>
    )
}

function SectionServices() {

    const axios = require('axios');

    const [Services, setServices] = useState([]);

    useEffect(() => {
        async function getUser() {
            try {
              const response = await axios.get('https://mocki.io/v1/59cccc02-0126-40c7-862f-339195678773');
              setServices(response.data.Services)
            } catch (error) {
              console.error(error);
            }
        }
        getUser()
    }, []);

    return (
        <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-10 container lg:mt-[112px] mt-20 lg:mb-[144px] md:mb-20 mb-14'>
            {Services.map(item => (
                <Service key={item.id} item={... item} />
            ))}
        </div>
    )
}

export default SectionServices
