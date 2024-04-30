import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SpecificCountryCard from './SpecificCountryCard';

const SpecificCountries = () => {
    const countries = useLoaderData() || [];
    return (
        <div>
            
            {
                countries.length < 1 ? <h2 className='text-center text-2xl font-bold text-red-500'>No spot for this country</h2> : <h2 className='my-6 text-2xl font-bold text-center text-red-500'> Visit your Favorite Destinations </h2>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
                {
                    countries.map(country => <SpecificCountryCard country={country} key={country._id}></SpecificCountryCard>)
                }
            </div>

        </div>
    );
};

export default SpecificCountries;