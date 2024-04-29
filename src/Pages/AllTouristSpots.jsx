import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SpotCard from '../Components/Navbar/SpotCard';
import { data } from 'autoprefixer';

const AllTouristSpots = () => {


    // const [sortedSpots,setSortedSpots] = useState[spots]
    const loadedSpots = useLoaderData() || [];
    const [spots ,setSpots ] = useState(loadedSpots) || [];



    const handleSortBy = (sortBy) => {
        console.log('insde sorrt');
        fetch(`http://localhost:5000/spots${sortBy ? `?sortBy=${sortBy}`: ''}`)
        .then(res => res.json())
        .then(data => {
            setSpots(data)
            console.log(data);
        })
    }


    return (
        <div className=''>
            All tourist spots {spots.length}
            {spots.length === 0 && <span>loading</span> }
            {/* sort  */}
            <div className='flex flex-col items-center'>
                <div className="dropdown dropdown-right dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a onClick={()=> handleSortBy('sort')}>Ascending </a></li>
                    
                    </ul>
                </div>
             </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mb-4'>
                {
                    spots.map(spot => <SpotCard spot={spot} key={spot._id}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpots;