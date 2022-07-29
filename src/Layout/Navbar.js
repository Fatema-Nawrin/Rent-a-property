import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><a href="/">Rent</a></li>
                        <li><a href="/">Buy</a> </li>
                        <li><a href="/">Sell</a></li>
                        <li><a href="/">Manage Property</a></li>
                        <li><a href="/">Resources</a></li>
                    </ul>
                </div>
                <h2 className="font-medium px-2 text-2xl lg:p-4">Estatery</h2>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href="/">Rent</a></li>
                        <li><a href="/">Buy</a> </li>
                        <li><a href="/">Sell</a></li>
                        <li><a href="/">Manage Property</a></li>
                        <li><a href="/">Resources</a></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-end">
                <button className='btn bg-white text-violet-600 border-violet-600 mr-4'>Login</button>
                <button className='btn  text-white bg-violet-600 border-violet-600'>Sign up</button>
            </div>

        </div>
    );
};

export default Navbar;