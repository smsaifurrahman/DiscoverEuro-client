import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SpecificCountryCard from './SpecificCountryCard';

const SpecificCountries = () => {
    const countries = useLoaderData() || [];
    return (
        <div>
            SpecificCountries {countries.length};
            {
                countries.length < 1 ? <h2 className='text-center text-2xl font-bold text-red-500'>No spot for this country</h2> : 'Tourist spots Available'
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    countries.map(country => <SpecificCountryCard country={country} key={country._id}></SpecificCountryCard>)
                }
            </div>

        </div>
    );
};

export default SpecificCountries;