import React from 'react'
import { StarIcon } from '@heroicons/react/24/outline';

function StarRating( {rate} ) {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <StarIcon width={24} height={24} key={index} className={index < rate ? 'stroke-Yellow-400' : 'stroke-Gray-300'} />
    ));

    return <div className='flex directionLTR'> {stars} </div>;   
}

export default StarRating
