import React, { use } from 'react';
//import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    console.log(pricingData);

    return (
        <div>
            <h2 className='text-5xl'>Get Our MemberShip</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}
                {
                    pricingData.map(pricing=> <DaisyPricing key={pricing.key} pricing={pricing}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;