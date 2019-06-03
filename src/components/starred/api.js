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

export const ADD_STAR = gql`
  mutation($starrableId: ID!) {
    addStar(input: { starrableId: $starrableId }) {
      starrable {
        id
      }
    }
  }
`;

export const REMOVE_STAR = gql`
  mutation($starrableId: ID!) {
    removeStar(input: { starrableId: $starrableId }) {
      starrable {
        id
      }
    }
  }
`;