import React from 'react';
import Banner from '../Banner/Banner';
import HelpCards from '../HelpCards/HelpCards';
import FeatureSection from '../FeatureSection/FeatureSection';
import ReplySection from '../ReplySection/ReplySection';
import OverViewSection from '../OverViewSection/OverViewSection';
import PricingSection from '../About/PricingSection/PricingSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HelpCards></HelpCards>
            <FeatureSection></FeatureSection>
            <ReplySection></ReplySection>
            <OverViewSection></OverViewSection>
            <PricingSection></PricingSection>
        </div>
    );
};

export default Home;