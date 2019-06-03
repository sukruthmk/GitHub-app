import { gql } from "apollo-boost";

export const GET_REPOSITORIES = gql`
  query($after: String) {
    search(
      type: REPOSITORY
      query: "language:Javascript"
      first: 10
      after: $after
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
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
