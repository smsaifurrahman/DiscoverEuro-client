import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {
    const {image, countryName, description }= country || {}
    return (
      <Link to={`/spots/country/${countryName}`}> 
        <div className="card card-compact transition md:hover:scale-105 bg-base-100 shadow-xl">
        <figure className='relative'>
        <div className='h-72 rounded-xl'>
          <img className='h-full rounded-xl' src={image} alt="Shoes" />
          <div className="absolute inset-0 rounded-xl opacity-50"></div>
        </div>
        <h2 className="card-title absolute bottom-0 left-1 text-2xl text-white p-3 font-bold">{countryName}</h2>
      </figure>




        <div className="card-body">
          
          <p>{description.slice(0,100)}</p>
          <div className="card-actions justify-end">
    
            </div>
          </div>
        </div>
        </Link>
    );
};

export default CountryCard;