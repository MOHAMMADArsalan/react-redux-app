import React from "react";

import { Name , ExpertLevel} from "./../"

const ExpertWrapper = ({ name, level }) => {
    return (
        <div className="flex-column">
            <Name name={name} />
            <ExpertLevel level={level}/>
        </div>
    );
}

export default ExpertWrapper;