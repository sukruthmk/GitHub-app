import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import auth from "../common/auth/auth";
import Loading from "../common/loading/loading";
import {getUrlParam} from '../common/url/url';

class Callback extends Component {
  async componentDidMount() {
    const { postCallback } = this.props;
    const code = getUrlParam("code", "");
    console.log(code);
    if (code) {
        await auth.handleAuthentication(code);
    }
    // this.props.history.replace("/");
    // postCallback();
  }

  render() {
    return <Loading />;
  }
}

export default withRouter(Callback);
