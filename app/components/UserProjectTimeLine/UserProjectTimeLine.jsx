import React from 'react';

import { Button } from "../"
const UserProjectTimeLine = () => {
    return (
        <div className="userProjectTimeLineContainer">
            <h3>Time line</h3>
            <Button text="view project" onPress={() => alert("HEllo")}/>
        </div>
    );
}

export default UserProjectTimeLine;