import React from 'react';
import { Row, Column, LinkTag, Avator, OnlineStatus, Header } from "./../"

const UserProjectDetail = ({ name, onLineStatus, avator, time, description }) => {
    return (
        <div className="userProjectContainer">
            <Column>
                <Header size="h4" text="Expert Details" />
                <Row>
                    <Avator url={avator} alt={`Image of ${name}`} />
                    <Column style={{ marginLeft: '10px' }}>
                        <Row className="align-item-center">
                            <OnlineStatus status={true} /> <b>{name}</b>
                        </Row>
                        <div>Local time: {time}</div>
                    </Column>
                </Row>
                <Header size="h4" text="Project Description" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat neque beatae excepturi tempora minima ducimus culpa asperiores iusto temporibus eius quisquam, possimus, ea quos. Cumque natus laboriosam reiciendis nisi quaerat.</p>
                <Header size="h4" text="Project Notice" />
                <LinkTag link="https://www.google.com" text="Go to the workroom to discuss about the price!" />
            </Column>
        </div>
    );
}

export default UserProjectDetail;