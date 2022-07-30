import React from 'react';
import PropertyCard from './PropertyCard';

const ListedProperties = ({ properties, filterdProperties }) => {
    return (
        <div className='w-full py-5'>
            <div className='pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 lg:mx-0 lg:gap-6'>
                {filterdProperties.length === 0
                    ?
                    properties.map(property => <PropertyCard
                        key={property.id}
                        property={property}
                    ></PropertyCard>)
                    :
                    filterdProperties.map(property => <PropertyCard
                        key={property.id}
                        property={property}></PropertyCard>)
                }
            </div>
        </div>


    );
};

export default ListedProperties;