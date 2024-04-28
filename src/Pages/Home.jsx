import React from 'react';
import Countries from '../Components/Countries';
import { Fade } from "react-awesome-reveal";

const Home = () => {
    return (
        <div>
           <Fade>
  <p>I will gently appear as I enter the viewport</p>
</Fade>
            <Countries></Countries>
        </div>
    );
};

export default Home;