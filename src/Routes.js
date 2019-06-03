import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/login/login";
import Callback from "./components/callback/callback";

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
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
