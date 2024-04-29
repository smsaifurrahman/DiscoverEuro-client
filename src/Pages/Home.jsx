import React from 'react';
import Countries from '../Components/Countries';
import { Fade } from "react-awesome-reveal";
import Banner from '../Components/Banner';
import TouristSpotHome from '../Components/TouristSpotHome';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const spots = useLoaderData() || [];
    return (
        <div>
             
           <Banner></Banner>
           <TouristSpotHome spots={spots} ></TouristSpotHome>
           <Countries></Countries>
        </div>
    );
};

export default Home;