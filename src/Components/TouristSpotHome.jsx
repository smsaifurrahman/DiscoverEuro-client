import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SpotCard from './Navbar/SpotCard';
import { Fade } from "react-awesome-reveal";

const TouristSpotHome = ({spots}) => {
    const slicedSpots = spots.slice(0,6);

    return (
        <div>
           
           <Fade>   <h2 className='text-3xl  font-bold text-center mt-12 text-red-500 italic'> Glimpse of the Place You want to dive in. </h2></Fade>
                 <h2 className=' text-center mt-2  mb-6  '>Our meticulously planned journeys cater to every wanderlust whim, whether it's adrenaline-pumping <br /> escapades, tranquil retreats, or immersive cultural encounters. .</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                {
                    slicedSpots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default TouristSpotHome;