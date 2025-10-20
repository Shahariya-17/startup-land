import React from 'react';
import Banner from '../Banner/Banner';
import HelpCards from '../HelpCards/HelpCards';
import FeatureSection from '../FeatureSection/FeatureSection';
import ReplySection from '../ReplySection/ReplySection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HelpCards></HelpCards>
            <FeatureSection></FeatureSection>
            <ReplySection></ReplySection>
        </div>
    );
};

export default Home;