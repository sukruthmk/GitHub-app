import React from "react";
import { Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import styled from "styled-components";

import auth from "../auth/auth";
import { getClient } from "../graphql/graphql";
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

        const client = getClient();
        return (
          <ApolloProvider client={client}>
            <NavBar />
            <StyledDiv>
              <Component />
            </StyledDiv>
          </ApolloProvider>
        );
      }}
    />
  );
}

export default SecuredRoute;
