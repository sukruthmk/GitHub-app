import React from "react";
import { withRouter } from "react-router-dom";
import auth from "../common/auth/auth";

import Loading from "../common/loading/loading";

class Logout extends React.Component {
  componentDidMount() {
    auth.signOut();
    this.props.history.replace("/login");
  }

  render() {
    return <Loading />;
  }
}

export default withRouter(Logout);
