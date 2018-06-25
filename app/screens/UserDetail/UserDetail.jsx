import React, { Component } from 'react';
import { UserDetailWrapper } from "./../../components"

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { user } = this.props;
        return (
            <div className="userContainer">
                <UserDetailWrapper user={user} />
            </div>
        );
    }
}

export default UserDetail;