import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { UserDetailWrapper } from "./../../components"
import { getUserDetailById } from '../../store/actions';

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        const { match , getUserDetailById} = this.props; 
        getUserDetailById(match.params.id)
    }
    render() {
        const { user } = this.props;
        if(Object.keys(user).length === 0) {
            return <div>User is Not Found</div>
        } 
        return (
            <div className="userContainer">
                <UserDetailWrapper user={user} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { isLoading, user } = state.users;
    return {
        isLoading,
        user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserDetailById: getUserDetailById
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);