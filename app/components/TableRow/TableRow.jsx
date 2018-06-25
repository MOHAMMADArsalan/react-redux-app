import React from 'react';

const TableRow = ({ children , ...rest}) => {
    return (
        <div className="flex-row tableRow" {...rest}>
            {children}
        </div>
    );
}

export default TableRow;