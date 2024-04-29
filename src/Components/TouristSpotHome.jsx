import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SpotCard from './Navbar/SpotCard';

const TouristSpotHome = ({spots}) => {
    const slicedSpots = spots.slice(0,6);

    return (
        <div>
            <h2 className='text-2xl font-bold text-center my-5' > Glimpse of Amazing places you might dive in </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                {
                    slicedSpots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default TouristSpotHome;