import React from 'react'
import { StarIcon } from '@heroicons/react/24/outline';

function StarRating( {rate} ) {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <StarIcon width={24} height={24} key={index} className={`${index < rate ? 'stroke-Yellow-400' : 'stroke-Gray-300'} md:w-6 md:h-6 w-4 h-4`}/>
    ));

    return <div className='flex directionLTR'> {stars} </div>;   
}

export default StarRating
