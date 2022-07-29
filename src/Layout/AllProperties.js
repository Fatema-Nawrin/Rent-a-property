import React, { useEffect, useState } from 'react';
import ListedProperties from './ListedProperties';

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
    const [price, setPrice] = useState("");
    const [filterdProperties, setFilteredProperties] = useState([]);

    const handleSelect = (location, type, month, price) => {
        console.log(month)
        const listedProperties = properties.filter(property => { return property.location === location && property.type === type && property.month === month })
        console.log(listedProperties)
        if (price === "low") {
            const final = listedProperties.filter(property => property.price < 2500)
            setFilteredProperties(final);
        }
        else {
            const final = listedProperties.filter(property => property.price > 2500)
            setFilteredProperties(final);
        }
    }

    return (
        <div div className="w-10/12 mx-auto">
            <h1 className='text-2xl lg:text-4xl font-bold py-5' >Search properties to rent</h1>

            <div className='my-6 py-2 flex-wrap flex justify-center bg-base-100'>
                <div>
                    <label class="label">
                        <span class="label-text pl-2">Location</span>
                    </label>
                    <select value={location} onChange={e => setLocation(e.target.value)} className="select select-bordered border-sky-800 w-24 md:w-36 m-2">
                        <option value="" disabled>Location</option>
                        <option value="LA">Los Angeles</option>
                        <option value="New York">New York</option>
                    </select>
                </div>

                <div>
                    <label class="label">
                        <span class="label-text pl-2">Property Type</span>
                    </label>
                    <select value={type} onChange={e => setType(e.target.value)} className="select select-bordered border-sky-800 w-24 md:w-36 m-2">
                        <option value="" disabled>Type</option>
                        <option value="houses">Houses</option>
                        <option value="apartment">Apartment</option>
                    </select>
                </div>
                <div>
                    <label class="label">
                        <span class="label-text pl-2">Price</span>
                    </label>
                    <select value={price} onChange={e => setPrice(e.target.value)} className="select select-bordered border-sky-800 w-24 md:w-36 m-2">
                        <option value="" disabled>Price</option>
                        <option value="low">$500-2500</option>
                        <option value="high">$2500-5000</option>
                    </select>
                </div>
                <div>
                    <label class="label">
                        <span class="label-text pl-2">Move in Month</span>
                    </label>
                    <select value={month} onChange={e => setMonth(e.target.value)} className="select select-bordered border-sky-800 w-24 md:w-36 m-2">
                        <option value="" disabled>When</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </div>
                <button className='btn border-0 lg:mx-3 lg:px-6 bg-violet-600 mt-11' onClick={() => handleSelect(location, type, month, price)}>Select</button>
            </div>

            <ListedProperties
                properties={properties}
                filterdProperties={filterdProperties}
            ></ListedProperties>

        </div>
    );
};

export default AllProperties;