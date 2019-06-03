import { gql } from "apollo-boost";

export const GET_REPOSITORIES = gql`
  query($after: String) {
    viewer {
      starredRepositories(first: 10, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          nameWithOwner
          url
          descriptionHTML
          viewerHasStarred
        }
      }
    }
  }
`;
