import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import { Fade } from "react-awesome-reveal";

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
        <div className='my-8'>
            

                 <Fade>   <h2 className=' text-2xl md:text-3xl  font-bold text-center mt-12 text-red-500 italic'> Choose Your favorite Country to Unleash your Dreams </h2></Fade>
                 <h2 className=' text-center mt-2  mb-6  '>Opt for our tourism service and unlock a world of extraordinary adventures. <br /> With us, you're not just a visitor; you're a curious soul, delving deep into the soul of every <br /> locale with expert guidance and attentive service.</h2>
                 { !countries ? <div className='flex flex-col items-center justify-center'><span className="loading loading-dots loading-lg"></span> </div> :
                 
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    countries.map(country => <CountryCard country={country} key={country._id}></CountryCard>)
                }
            </div>
                 
                 }
            
        </div>
    );
};

export default Countries;