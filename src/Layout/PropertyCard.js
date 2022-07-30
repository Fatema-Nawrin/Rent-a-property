import { faBath, faBed, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PropertyCard = ({ property }) => {
    const { name, price, img, id, address, bed, bathroom } = property;
    return (
        <div>
            <div className="card bg-base-100 shadow">
                <figure><img className='h-48 w-full rounded-t-xl' src={img} alt={name} /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <p className=' text-gray-400'><span className='text-xl lg:text-2xl text-violet-600 font-bold'>${price}</span>/<small>month</small></p>
                        <FontAwesomeIcon icon={faHeart} className="text-violet-400"></FontAwesomeIcon>
                    </div>

                    <h2 className="card-title">{name}</h2>
                    <p className='text-gray-400 font-medium'>{address}</p>
                    <hr className='bg-gray-300 ' />
                    <p className='text-gray-400'><FontAwesomeIcon className='px-2' icon={faBed}></FontAwesomeIcon>{bed} Beds<FontAwesomeIcon className='pl-3 px-2' icon={faBath}></FontAwesomeIcon>{bathroom} Bathrooms</p>

                </div>
            </div>
        </div>
    );
};

export default PropertyCard;