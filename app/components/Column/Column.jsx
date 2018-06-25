import React from 'react';

const Column = ({ children, ...rest }) => {
    return (
        <div className="flex-column" {...rest}>{children}</div>
    );
}

export default Column;