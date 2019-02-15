import gql from "graphql-tag";

export const statsByFilter = gql`
  query statsByFilter($data: StatsByFilterInput!) {
    statsByFilter(data: $data) {
      name
    }
  }
`;
