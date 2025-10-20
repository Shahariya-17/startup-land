import React from 'react';
import Banner from '../Banner/Banner';
import HelpCards from '../HelpCards/HelpCards';
import FeatureSection from '../FeatureSection/FeatureSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HelpCards></HelpCards>
            <FeatureSection></FeatureSection>
        </div>
    );
};

export default Home;