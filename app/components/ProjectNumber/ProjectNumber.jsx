import React from 'react';

const ProjectNumber = ({ number, ...rest }) => <b className="projectNumber" {...rest}> # {number}</b>


export default ProjectNumber;