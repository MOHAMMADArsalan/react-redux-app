import React, { Component } from 'react';
import { Table } from "./../components"
import { UserDetail } from "./"

import { tableData } from "./../config/constants";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  onSearchHandler = ({ target }) => {
    this.setState({
      search: target.value
    })
  }


  render() {
    const { search } = this.state;
    return (
      <div >
        <UserDetail user={tableData[0]}/>
        {/* <Table search={search} onSearchHandler={this.onSearchHandler} placeHolder={'Start typing to search'} /> */}
      </div>
    );
  }
}
export default App;
