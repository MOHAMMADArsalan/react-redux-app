import React from 'react';

import { UserDetailHeader, UserProjectTimeLine, UserProjectDetail, Row, Col, UserDetailFooter, Column , Button} from "./../"
const UserDetailWrapper = ({ user }) => {
    return (
        <React.Fragment>
            <UserDetailHeader {...user.project} {...user.category} />
            <Column className="userDetailBody flex-row">
                <Col flex={0.5}>
                    <UserProjectTimeLine />
                </Col>
                <Col flex={2}>
                    <UserProjectDetail {...user.project} {...user.user} onLineStatus={true} time={new Date().toLocaleString()} />
                </Col>
            </Column>
            <UserDetailFooter updatedAt={user.submitted} onPress={() => alert("HEllo")} />
        </React.Fragment>


    );
}

export default UserDetailWrapper;