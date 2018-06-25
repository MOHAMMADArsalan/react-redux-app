import React from 'react';

const StepperPointer = ({ transparent }) => {
    return (
        <span className="stepperPointer" style={{ backgroundColor: transparent ? 'white' : '' }}></span>
    );
}

export default StepperPointer;