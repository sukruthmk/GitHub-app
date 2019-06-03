import React from "react";
import { Route } from "react-router-dom";
import auth from "../auth/auth";
import Loading from "../loading/loading";
import NavBar from "../navbar/navbar";

function SecuredRoute(props) {
  const { path, checkingSession } = props;
  return (
    <Route
      path={path}
      render={() => {
        if (checkingSession) return <Loading />;
        if (!auth.isAuthenticated()) {
          window.location.href = "/login";
          return <div />;
        }
        return (
          <React.Fragment>
            <NavBar />
          </React.Fragment>
        );
      }}
    />
  );
}

export default SecuredRoute;
