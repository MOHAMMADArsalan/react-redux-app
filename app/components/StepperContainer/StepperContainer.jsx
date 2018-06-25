import React from 'react';

import { StepperPointer } from "./../"
const StepperContainer = ({ transparent, status, time }) => {
    return (
        <div className="stepperContainer">
            <StepperPointer transparent={transparent} />
            <div>{status}</div>
            <div>{time}</div>
        </div>
    );
}

export default StepperContainer;