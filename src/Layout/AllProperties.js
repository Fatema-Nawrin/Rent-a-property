import React, { useEffect, useState } from 'react';
import Card from './Card';

const AllProperties = () => {
    const [properties, setProperties] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])
    const [location, setLocation] = useState("");
    const [month, setMonth] = useState("");
    const [type, setType] = useState("");

    const [price, setPrice] = useState("")
    const [filterdProperties, setFilteredProperties] = useState([])
    const handleSelect = (location, type) => {
        console.log(type)
        const filterdProperties = properties.filter(property => { return property.location === location && property.type === type })
        console.log(filterdProperties)
        setFilteredProperties(filterdProperties)
    }
    return (
        <div div className="w-11/12 mx-auto">
            <h1 className='text-2xl lg:text-3xl font-bold py-5' >Search properties to rent</h1>
            <div className='py-6'>

                <select value={location} onChange={e => setLocation(e.target.value)} className="select select-bordered border-sky-800 w-28 md:w-36 m-2">
                    <option value="LA">Los Angeles</option>
                    <option value="New York">New York</option>
                </select>

                <select value={type} onChange={e => setType(e.target.value)} className="select select-bordered border-sky-800 w-28 md:w-36 m-2">
                    <option value="houses">Houses</option>
                    <option value="apartment">Apartment</option>
                </select>


            </div>
            <button className='btn bg-sky-800  mb-6' onClick={() => handleSelect(location, type)}>Choose</button>
            <div className='w-full'>
                <div className='pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-6 lg:mx-0 lg:gap-6'>
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
        </div>
    );
};

export default AllProperties;