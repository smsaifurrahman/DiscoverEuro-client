import React from 'react';
import Countries from '../Components/Countries';
import { Fade } from "react-awesome-reveal";
import Banner from '../Components/Banner';
import TouristSpotHome from '../Components/TouristSpotHome';
import { useLoaderData } from 'react-router-dom';
import WhyUs from '../Components/WhyUs';

const Home = () => {
    const spots = useLoaderData() || [];
    
    return (
        <div>
             
           <Banner></Banner>
           <TouristSpotHome spots={spots} ></TouristSpotHome>
           <Countries></Countries>
           <WhyUs></WhyUs>
        </div>
    );
};

export default Home;