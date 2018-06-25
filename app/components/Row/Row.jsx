import React from 'react';


const Row = ({ children, className ,...rest }) => {
    return (
        <div className={`flex-row ${className}`} {...rest}> {children}</div>
    );
}

export default Row;