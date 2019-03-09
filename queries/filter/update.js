import gql from "graphql-tag";

export const statsByFilterQuery = gql`
  query statsByFilter($data: StatsByFilterInput!) {
    statsByFilter(data: $data) {
      average {
        name
        scores {
          name
          average
          games_played
        }
      }
      total {
        name
        scores {
          name
          total
        }
      }
    }
  }
`;
