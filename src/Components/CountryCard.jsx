import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {
    const {image, countryName, description }= country || {}
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{countryName}</h2>
    <p>{description.slice(0,100)}</p>
    <div className="card-actions justify-end">
     <Link to={`/spots/country/${countryName}`}> <button className="btn btn-primary">Buy Now</button></Link>
    </div>
  </div>
</div>
    );
};

export default CountryCard;