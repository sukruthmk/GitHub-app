import React from "react";
import { Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import styled from "styled-components";

import auth from "../auth/auth";
import Loading from "../loading/loading";
import NavBar from "../navbar/navbar";

const StyledDiv = styled.div`
  margin-top: 100px;
`;

function SecuredRoute(props) {
  const { component: Component, path, checkingSession } = props;
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
            <StyledDiv>
              <Component />
            </StyledDiv>
          </React.Fragment>
        );
      }}
    />
  );
}

export default SecuredRoute;
