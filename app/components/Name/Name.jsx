import React from 'react';

const Name = ({ name, ...rest }) => <span className="name" {...rest}>{name}</span>


export default Name;