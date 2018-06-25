import React from 'react';

import { Name, ProjectNumber, Trancate } from "./../"
const ProjectWrapper = ({ name, number, description, limit }) => {
    return (
        <div className="flex-column">
            <div className="flex-row">
                <ProjectNumber number={number} />
                <Name name={name} />
            </div>
            <Trancate text={description} limit={limit} />
        </div>
    );
}

export default ProjectWrapper;