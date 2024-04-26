import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SpotCardDetails = () => {
    const spot = useLoaderData() || {};
    const {_id,image, spotName, countryName, location, description, averageCost, seasonality, travelTime, totalVisitor, userEmail, userName } = spot;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title"> {spotName} </h2>
          <p>{spotName}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    );
};

export default SpotCardDetails;