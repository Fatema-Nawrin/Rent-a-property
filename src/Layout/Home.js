import React from 'react';
import AllProperties from './AllProperties';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className='bg-violet-50'>
            <Navbar />
            <AllProperties />
        </div>
    );
};

export default Home;