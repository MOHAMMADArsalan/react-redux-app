import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import { withRouter } from "react-router-dom"

import { getUsers } from "./../../store/actions"
import { Table } from "./../../components"
class UserTable extends Component {
    state = {
        search: ''
    };

    onSearchHandler = ({ target }) => {
        this.setState({
            search: target.value
        })
    }

    componentDidMount() {
        this.props.getUsers();
    }

    onShowUserDetails = (id) => {
        this.props.history.push(`/user/${id}`)
    }
    render() {
        const { search } = this.state;
        const { isLoading, users, hasError, error } = this.props;
        if (isLoading) {
            return <div>Loading....</div>
        }
        return (
            <div className="tableContainer">
                <Table
                    list={users} search={search}
                    onSearchHandler={this.onSearchHandler} 
                    placeHolder={'Start typing to search'}
                    onShowUserDetails={this.onShowUserDetails} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, isLoading, hasError, error } = state.users;
    return {
        users,
        isLoading,
        hasError,
        error
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUsers: getUsers
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserTable));