import React from 'react';
import Banner from '../../Banner/Banner';
import BestFoodSection from '../../bestFoodSection/BestFoodSection';
import ServeSection from '../../serveSection/ServeSection';
import Pride from '../../Pride/Pride';
import Accordian from '../../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BestFoodSection/>
            <Pride/>
            <ServeSection/>
            <Accordian/>
        </div>
    );
};

export default Home;