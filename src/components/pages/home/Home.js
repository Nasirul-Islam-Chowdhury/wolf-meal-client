import React from 'react';
import Banner from '../../Banner/Banner';
import BestFoodSection from '../../bestFoodSection/BestFoodSection';
import ServeSection from '../../serveSection/ServeSection';
import Pride from '../../Pride/Pride';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BestFoodSection/>
            <Pride/>
            <ServeSection/>
        </div>
    );
};

export default Home;