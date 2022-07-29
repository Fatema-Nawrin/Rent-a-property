import React from 'react';
import Card from './Card';

const ListedProperties = ({ properties, filterdProperties }) => {
    return (

        <div className='w-full py-5'>
            <div className='pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 lg:mx-0 lg:gap-6'>
                {filterdProperties.length === 0
                    ?
                    properties.map(property => <Card
                        key={property.id}
                        property={property}
                    ></Card>)
                    :
                    filterdProperties.map(property => <Card
                        key={property.id}
                        property={property}></Card>)
                }
            </div>
        </div>


    );
};

export default ListedProperties;