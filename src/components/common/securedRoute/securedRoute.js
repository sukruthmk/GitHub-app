import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import auth from "../auth/auth";
import Loading from "../loading/loading";
import NavBar from "../navbar/navbar";

function SecuredRoute(props) {
  const { path, checkingSession } = props;
  return (
    <Route
      path={path}
      render={() => {
        // if (checkingSession) return <Loading />;
        // if (!auth.isAuthenticated()) {
        //   this.props.history.replace("/login");
        //   return <div />;
        // }
        return (
          <React.Fragment>
            <NavBar />
          </React.Fragment>
        );
      }}
    />
  );
}

export default withRouter(SecuredRoute);
