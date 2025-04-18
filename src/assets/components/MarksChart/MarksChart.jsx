import React, { use } from 'react';

const MarksChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    return (
        <div>
            
        </div>
    );
};

export default MarksChart;