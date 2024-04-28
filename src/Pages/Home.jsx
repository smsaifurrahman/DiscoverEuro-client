import React from 'react';
import Countries from '../Components/Countries';
import { Fade } from "react-awesome-reveal";
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
             
           <Banner></Banner>
             
            <Countries></Countries>
        </div>
    );
};

export default Home;