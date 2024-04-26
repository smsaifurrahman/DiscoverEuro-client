import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SpotCard from '../Components/Navbar/SpotCard';

const AllTouristSpots = () => {

    // const [spots ,setSpots ] = useState([]) || [];
    const spots = useLoaderData() || [];

    return (
        <div className=''>
            All tourist spots {spots.length}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
                {
                    spots.map(spot => <SpotCard spot={spot} key={spot._id}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpots;