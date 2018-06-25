import React from 'react';

const Avator = ({ url, alt }) => {
    return (
        <img src={url} alt={alt} className="avator" />
    );
}

export default Avator;