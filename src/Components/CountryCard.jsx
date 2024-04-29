import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {
    const {image, countryName, description }= country || {}
    return (
      <Link to={`/spots/country/${countryName}`}> 
        <div className="card card-compact transition md:hover:scale-105 bg-base-100 shadow-xl border-2">
        <figure className=''>
        <div className='h-72 w-full md:w-[392px] rounded-xl relative'>
          <img className='h-full w-full  rounded-xl' src={image} alt="Shoes" />
          <h2 className="card-title absolute bottom-0  left-4 md:left-1 text-2xl text-white p-3 font-bold">{countryName}</h2>
          {/* <div className="absolute inset-0 rounded-xl opacity-50"></div> */}
        </div>
        
      </figure>




        <div className="card-body">
          
          <p className='text-xl'>{description.slice(0,100)}...</p>
          <div className="card-actions justify-end">
    
            </div>
          </div>
        </div>
        </Link>
    );
};

export default CountryCard;