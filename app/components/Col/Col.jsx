import React from 'react';

const Col = ({ flex, children }) => {
    return (
        <div style={{ flex: flex }}> {children}</div>
    );
}

export default Col;