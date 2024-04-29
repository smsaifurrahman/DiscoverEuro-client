import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const SpecificCountryCard = ({country}) => {
  const {_id,image, spotName, countryName, location, description, averageCost, seasonality, travelTime, totalVisitor, userEmail, userName } = country
    return (
      <div className="card card-compact  bg-base-100 shadow-xl border-2  transform duration-300 md:hover:scale-105 ">
      <figure className='relative'><img className='w-full h-72' src={image} alt="Shoes" />
       
      
      </figure>
     
      <div className="card-body">
          <h2 className="card-title text-red-500 text-2xl font-bold"> {spotName} </h2>
         
          <div className='flex items-center gap-2 text-xl '>
          <CiLocationOn />
          <h2>{location}, {countryName}</h2>
          </div>
          <p> {description.slice(0,100) } </p>
          <Fade>   <h2 className=' ml-52 font-bold text-red-500
           font-serif italic text-[16px] '>{seasonality} Deals with </h2></Fade>
          
          <div className=" flex justify-between gap-28 items-center  ">
         <Link to={`/spotdetails/${_id}`}> <button className="btn bg-red-500 text-white font-bold ">View Details</button></Link>
          <p className='font-bold font-serif  '> Average <br />  <span className='text-red-500 font-bold text-xl'> $ {averageCost}</span> Per Person  </p>
          </div>
      </div>
   </div>
    );
};

export default SpecificCountryCard;