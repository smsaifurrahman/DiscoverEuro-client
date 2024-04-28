import React from 'react';
import { Link } from 'react-router-dom';

const SpecificCountryCard = ({country}) => {
  const {_id,image, spotName, countryName, location, description, averageCost, seasonality, travelTime, totalVisitor, userEmail, userName } = country
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{spotName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
          <Link to={`/spotdetails/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default SpecificCountryCard;