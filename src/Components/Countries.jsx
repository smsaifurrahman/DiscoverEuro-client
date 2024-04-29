import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const Countries = () => {
    const [countries,setCountries] = useState([])

   useEffect(() =>{
    fetch('https://discover-euro-server-r9x6oq445-s-m-saifur-rahmans-projects.vercel.app/countries')
    .then(res =>res.json())
    .then(data => {
        setCountries(data)
    })
   },[])

    return (
        <div>
            Countries {countries.length}
            {countries.length === 0 && <span>loading</span> }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    countries.map(country => <CountryCard country={country} key={country._id}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Countries;