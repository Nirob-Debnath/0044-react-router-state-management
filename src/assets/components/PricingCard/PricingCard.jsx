import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    
    const{title, price, description, features} = pricing;

    return (
        <div className='flex flex-col border bg-amber-600 rounded-2xl p-4'>
            <div >
                <h1 className='text-7xl'>{title}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            <div className='bg-amber-800 p-4 rounded-2xl mt-10 flex-1'>
                <p>{pricing.description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-6">Subscribe</button>
        </div>
    );
};

export default PricingCard;