import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto mt-6 px-2 md:px-2 lg:px-0'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;