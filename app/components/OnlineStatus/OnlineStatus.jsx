import React from 'react';

const OnlineStatus = ({ status }) => {
    return (
        <div className="online" style={{ backgroundColor: status ? '#4CD964' : 'red' }} />
    );
}

export default OnlineStatus;