import React from 'react';

const Header = ({ size, header, ...rest }) => {
    let heading = <h1>{header}</h1>
    switch (size) {
        case 'h1':
            heading = <h1>{header}</h1>
            break;
        case 'h2':
            heading = <h2>{header}</h2>
            break;
        case 'h3':
            heading = <h3>{header}</h3>
            break;
        case 'h4':
            heading = <h4>{header}</h4>
            break;
        case 'h5':
            heading = <h5>{header}</h5>
            break;
        case 'h6':
            heading = <h6>{header}</h6>
            break;
    }
    return heading;
}

export default Header;