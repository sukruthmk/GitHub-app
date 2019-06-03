import ApolloClient from "apollo-boost";

import auth from "../auth/auth";
import { GITHUB_GRAPHQL_URL } from "../../../config.js";

export const getClient = () => {
  const client = new ApolloClient({
    uri: GITHUB_GRAPHQL_URL,
    request: operation => {
      const token = auth.getToken();
      if (token) {
        operation.setContext({
          headers: {
            authorization: `Bearer ${token}`
          }
        });
      }
    }
  });

  return client;
};
