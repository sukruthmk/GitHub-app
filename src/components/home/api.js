import { gql } from "apollo-boost";

export const GET_REPOSITORIES = gql`
  {
    search(type: REPOSITORY, query: "language:Javascript", first: 10) {
      nodes {
        ... on Repository {
          id
          nameWithOwner
          url
          descriptionHTML
        }
      }
    }
  }
`;
