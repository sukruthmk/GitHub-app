import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Callback from "./components/callback/callback";
import Home from "./components/home/home.js";
import Login from "./components/login/login";
import SecuredRoute from "./components/common/securedRoute/securedRoute";

class Routes extends Component {
  render() {
    const { checkingSession, postCallback } = this.props;
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/callback"
            render={() => {
              return <Callback postCallback={postCallback} />;
            }}
          />
          <SecuredRoute
            exact
            path="/"
            component={Home}
            checkingSession={checkingSession}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
