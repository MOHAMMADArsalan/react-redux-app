import React from 'react';


const Row = ({ children, ...rest }) => {
    return (
        <div className="flex-row" {...rest}> {children}</div>
    );
}

export default Row;