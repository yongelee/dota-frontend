import gql from "graphql-tag";

export const tournamentFormOptions = gql`
  query {
    tournamentFormOptions {
      id
      name
      date
    }
  }
`;
