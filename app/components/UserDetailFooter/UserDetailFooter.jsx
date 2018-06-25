import React from 'react';
import { Row, Button } from '../';

const UserDetailFooter = ({ updatedAt, onPress }) => {
    return (
        <Row className="userFooter flex-row">
            <div>Last Update: {updatedAt}</div>
            <Button text="view project" onPress={onPress}/>
        </Row>
    );
}

export default UserDetailFooter;