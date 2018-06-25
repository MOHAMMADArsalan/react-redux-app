import React from 'react';

import { Button, StepperContainer, Header } from "../"
const UserProjectTimeLine = () => {
    return (
        <div className="userProjectTimeLineContainer">
            <Header size="h3" text="Time line" />
            <StepperContainer transparent={false} status="Submitted" time="September 15, 2017" />
            <StepperContainer transparent={false} status="Claimed" time="September 16, 2017" />
            <StepperContainer transparent={true} status="Pendind Payment" />
            <StepperContainer transparent={true} status="In Progress" />
            <StepperContainer transparent={true} status="Awaiting Approval" />
            <StepperContainer transparent={true} status="Completed" />
            <Button text="view project" onPress={() => alert("HEllo")} />
        </div>
    );
}

export default UserProjectTimeLine;