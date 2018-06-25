import React from 'react';

const Button = ({ text, onPress }) => {
    return (
        <button className="button button-primary" onClick={onPress}>{text}</button>
    );
}

export default Button;