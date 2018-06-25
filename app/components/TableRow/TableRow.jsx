import React from 'react';

const TableRow = ({ children, className, ...rest }) => {
    return (
        <div className={`flex-row tableRow ${className}`} {...rest}>
            {children}
        </div>
    );
}

export default TableRow;