import React from 'react';
import { Row, Button } from '../';

const UserDetailFooter = ({ updatedAt, onPress }) => {
    return (
        <Row className="userFooter">
            <div>Last Update: {updatedAt}</div>
            <Button text="view project" onPress={onPress}/>
        </Row>
    );
}

export default UserDetailFooter;