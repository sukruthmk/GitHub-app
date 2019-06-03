import { gql } from "apollo-boost";

export const GET_AVATAR = gql`
  query {
    viewer {
      avatarUrl
    }
  }
`;
