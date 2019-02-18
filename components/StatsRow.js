import { useContext } from "react";
import styled from "styled-components";
import { Query } from "react-apollo";

import { FilterContext } from "../lib/context";

import { statsByFilter } from "../queries/filter/update";

const Wrapper = styled.div``;

export default () => {
  const { state } = useContext(FilterContext);

  // turn filters object into an array of stats that are true
  const filters = Object.keys(state.filters)
    .filter(key => state.filters[key])
    .map(key => key);

  const tourn_ids = Object.keys(state.tourns)
    .filter(key => state.tourns[key].checked)
    .map(key => key);

  return (
    <Query
      query={statsByFilter}
      variables={{
        data: {
          tourn_ids,
          filters
        }
      }}
      fetchPolicy="network-only"
    >
      {({ loading, error, data }) => {
        if (loading) return <p>loading...</p>;
        if (error) return <p>error...</p>;
        // console.log(data);
        return (
          <Wrapper className="stats-row">
            {[1, 2, 3, 4, 5].map((x, i) => (
              <div
                key={i}
                className="card"
                style={{ padding: "1rem", margin: "1rem 0" }}
              >
                <h2 className="title">Most Kills</h2>
                <table className="table is-fullwidth is-striped is-hoverable">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Miracle</td>
                      <td>83</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Sumail</td>
                      <td>33</td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>No[o]ne</td>
                      <td>33</td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>PPD</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>5.</td>
                      <td>Fear</td>
                      <td>11</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </Wrapper>
        );
      }}
    </Query>
  );
};
