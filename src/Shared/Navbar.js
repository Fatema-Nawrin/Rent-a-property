import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">

                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><Link to='/'>Rent</Link> </li>
                        <li><Link to='/'>Buy</Link> </li>
                        <li><Link to='/'>Sell</Link> </li>
                        <li><Link to='/'>Manage Property</Link> </li>
                        <li><Link to='/'>Resources</Link> </li>
                    </ul>
                </div>
                <h2 className="font-medium lg:px-2 text-2xl lg:text-3xl lg:p-4"><FontAwesomeIcon className='text-violet-500 pr-1 lg:pr-2' icon={faHome}></FontAwesomeIcon>Estatery</h2>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Rent</Link> </li>
                        <li><Link to='/'>Buy</Link> </li>
                        <li><Link to='/'>Sell</Link> </li>
                        <li><Link to='/'>Manage Property</Link> </li>
                        <li><Link to='/'>Resources</Link> </li>
                    </ul>
                </div>
            </div>

            <div className="navbar-end">
                <button className='btn btn-sm md:h-10 bg-white text-violet-500 border-violet-500 mr-4'>Login</button>
                <button className='btn btn-sm md:h-10 text-white bg-violet-500 border-violet-500'>Sign up</button>
            </div>

        </div>
    );
};

export default Navbar;