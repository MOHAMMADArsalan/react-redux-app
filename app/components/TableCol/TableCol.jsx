import React from 'react';

const TableCol = ({ children , ...rest}) => {
    return (
        <div className="flexOne" {...rest}>{children}</div>
    );
}

export default TableCol;