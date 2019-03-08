import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../lib/rootStore";
import { useContext } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";

import { statsByFilter } from "../queries/filter/update";

const Wrapper = styled.div``;

/**
 * basically, get the query using useEffect
 * then do it based on clicks after that...
 */

const StatsRow = observer(() => {
  const { tournamentStore, statsStore } = useContext(RootStoreContext);

  const avg = toJS(statsStore.avgToGet);
  const total = toJS(statsStore.totalToGet);
  const tournaments = toJS(tournamentStore.tournamentsToGet);

  console.log(avg);
  console.log(total);
  console.log(tournaments);

  if (avg.length === 0 || total.length === 0 || tournaments === 0) {
    return null;
  }

  // const { data, loading, error } = useQuery(statsByFilter, {
  //   variables: {
  //     data: {
  //       tourn_ids: tournaments,
  //       avgOptions: avg,
  //       totalOptions: total
  //     }
  //   },
  //   fetchPolicy: "network-only"
  // });

  // if (loading) return "loading..";
  // if (error) return "error..";
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
});

export default StatsRow;
