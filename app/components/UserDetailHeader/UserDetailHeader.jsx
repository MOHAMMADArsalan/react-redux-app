import React from 'react';

import { Row, ProjectNumber, Name, CategoryType } from "./../"
const UserDetailHeader = ({ number, name, type }) => {
    return (
        <Row className="userHeader">
            <Row>
                <ProjectNumber number={number} style={{ fontSize: '1.2em' }} />
                <Name name={name} style={{ fontSize: '1.2em' }} />
            </Row>
            <CategoryType type={type} />
        </Row>
    );
}

export default UserDetailHeader;