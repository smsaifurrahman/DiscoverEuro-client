import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

const SpotCard = ({spot}) => {
    const {_id,image, spotName, countryName, location, description, averageCost, seasonality, travelTime, totalVisitor, userEmail, userName } = spot;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl border-2  transform duration-300 md:hover:scale-105 ">
            <figure className='relative'><img className='w-full h-72' src={image} alt="Shoes" />
             
            <h2 className="card-title absolute text-sm text-white -bottom-1 p-2 font-bold right-0 rounded-l-btn bg-red-500">  {travelTime} < span className=''>Days & </span> {travelTime-1} <span>Nights</span> </h2>
            </figure>
           
            <div className="card-body">
                <h2 className="card-title text-red-500 text-2xl font-bold"> {spotName} </h2>
               
                <h2 className="card-title font-semibold "> Yearly Visitors: {totalVisitor} </h2>
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

export default SpotCard;