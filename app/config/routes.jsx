import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { UserDetail, UserTable } from "./../screens";

const Routers = () => (
    <Router>
        <div>
            <Route exact path="/" component={UserTable} />
            <Route path="/user/:id" component={UserDetail}/>
        </div>
    </Router>
)

export default Routers