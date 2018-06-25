import React from 'react';

const TableCol = ({ children , className,  ...rest}) => {
    return (
        <div className={ `flexOne ${className}` } {...rest}>{children}</div>
    );
}

export default TableCol;