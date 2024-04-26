import React, { useState } from 'react';
import CountryCard from './CountryCard';

const Countries = () => {
    const [countries,setCountries] = useState([])

    fetch('http://localhost:5000/countries')
    .then(res =>res.json())
    .then(data => {
        setCountries(data)
    })

    return (
        <div>
            Countries {countries.length}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    countries.map(country => <CountryCard country={country} key={country._id}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Countries;