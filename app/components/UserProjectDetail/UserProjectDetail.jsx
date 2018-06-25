import React from 'react';
import { Row, Column, LinkTag , Avator, OnlineStatus } from "./../"

const UserProjectDetail = ({ name, onLineStatus, avator, time, description }) => {
    return (
        <div className="userProjectContainer">
            <Column>
                <h4>Expert Details</h4>
                <Row>
                    <Avator url={avator} alt={`Image of ${name}`}/>
                    <Column style={{marginLeft: '10px'}}>
                        <Row className="align-item-center flex-row">
                            <OnlineStatus status={true}/> <b>{name}</b>
                        </Row>
                        <div>Local time: {time}</div>
                    </Column>
                </Row>
                <h4>Project Description</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat neque beatae excepturi tempora minima ducimus culpa asperiores iusto temporibus eius quisquam, possimus, ea quos. Cumque natus laboriosam reiciendis nisi quaerat.</p>

                <h4>Project Notice</h4>
                <LinkTag link="https://www.google.com" text="Go to the workroom to discuss about the price!" />
                
            </Column>
        </div>
    );
}

export default UserProjectDetail;