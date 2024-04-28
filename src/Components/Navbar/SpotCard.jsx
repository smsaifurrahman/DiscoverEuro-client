import React from 'react';
import { Link } from 'react-router-dom';

const SpotCard = ({spot}) => {
    const {_id,image, spotName, countryName, location, description, averageCost, seasonality, travelTime, totalVisitor, userEmail, userName } = spot;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className='w-full h-72' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {spotName} </h2>
                <h2 className="card-title"> Total Visitor Yearly: {totalVisitor} </h2>
                <h2 className="card-title"> Average Cost {averageCost} </h2>
                <h2 className="card-title"> Travel Time: {travelTime} </h2>
                <h2 className="card-title"> Total Visitor Yearly: {totalVisitor} </h2>

                
                
                <div className=" flex justify-between gap-40 items-center  ">
               <Link to={`/spotdetails/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                <p> From <br /> $ {averageCost} Per Person  </p>
                </div>
            </div>
         </div>
    );
};

export default SpotCard;