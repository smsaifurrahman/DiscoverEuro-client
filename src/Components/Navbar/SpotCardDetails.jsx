import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";


const SpotCardDetails = () => {
    const spot = useLoaderData() || {};
    const {_id,image, spotName, countryName, location, description, averageCost, seasonality, travelTime, totalVisitor, userEmail, userName } = spot;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
        <figure className='md:h-[460px] relative h-96 md:w-1/2 w-full object-cover'>
           <div className='relative'>
           <img className='object-over' src={image} alt="Album"/>
             
           <h2 className="card-title absolute text-sm text-white -bottom-1 p-3 font-bold left-0 rounded-l-btn bg-red-500">  {travelTime} < span className=''>Days & </span> {travelTime-1} <span>Nights</span> </h2>
           </div>
       
        </figure>
        <div className="card-body border-red-200 border-y border-r rounded-r-xl ">
          <h2 className="card-title text-red-500 font-bold text-3xl"> {spotName} </h2>
          <div className='flex items-center gap-2 text-xl '>
          <CiLocationOn />
          <h2>{location}, {countryName}</h2>
          </div>
          <h2 className='font-serif font-bold text-2xl space-y-4'> Yearly Visitors: <span className='text-red-500 font-bold text-xl'> $ {totalVisitor}</span></h2>
          <div className=''>
              <h2 className='font-serif text-xl font-bold '> Seasonality : <span className='text-red-500'>{seasonality}  </span> </h2>
              <p className=' text-xl font-bold font-serif my-3 '> Average Cost : <span className='text-red-500 font-bold text-xl'> $ {averageCost}</span> Per Person  </p>
                
          </div>
          <p className=''> {spotName} : {description}</p>
          
          <div className="card-actions justify-end">
            <button className="btn bg-red-500 text-white">Book your travel</button>
          </div>
        </div>
      </div>
    );
};

export default SpotCardDetails;