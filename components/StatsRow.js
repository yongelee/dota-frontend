import { useContext } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";

import { FilterContext } from "../lib/filterContext";

import { statsByFilter } from "../queries/filter/update";
import { SelectedContext } from "../lib/selectedContext";

const Wrapper = styled.div``;

export default () => {
  const { selectedState } = useContext(SelectedContext);

  const { data, error, loading } = useQuery(statsByFilter, {
    variables: {
      data: {
        filters: selectedState.statsSelected,
        tourn_ids: []
      }
    },
    fetchPolicy: "network-only"
  });

  if (loading) {
    return (
      <div className="stats-row">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="stats-row">
        <p>Error...</p>
      </div>
    );
  }

  console.log(data);

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
};
