import {useQuery} from "react-apollo-hooks";
import styled from "styled-components";

import {statsByFilterQuery} from "../queries/filter/update";
import AverageCard from "./AverageCard";
import TotalCard from "./TotalCard";

const ListWrapper = styled.div`
  padding: 1rem;

  @media(max-width:700px) {
    padding: 0;
  }
`;

const StatsDisplay = ({tournaments, avg, total, limit, minGames}) => {
  const {
    data: {statsByFilter},
    loading,
    error
  } = useQuery(statsByFilterQuery, {
    variables: {
      data: {
        tourn_ids: tournaments,
        avgOptions: avg,
        totalOptions: total,
        limit,
        minGames
      }
    },
    fetchPolicy: "network-only"
  });

  if (loading) return <div className="stats-row">Loading...</div>;
  if (error) return <div className="stats-row">Error...</div>;

  return (
    <div className="columns">
      <div className="column">
        {/* <p className="subtitle is-3">Average rankings:</p> */}
        <hr />
        <ListWrapper>
          {statsByFilter.average.map((avg, i) => (
            <AverageCard key={i} name={avg.name} scores={avg.scores} />
          ))}
        </ListWrapper>
      </div>
      <div className="column">
        {/* <p className="subtitle is-3">Highest score rankings:</p> */}
        <hr />
        <ListWrapper>
          {statsByFilter.total.map((t, i) => (
            <TotalCard key={i} name={t.name} scores={t.scores} />
          ))}
        </ListWrapper>
      </div>
    </div>
  );
};

export default StatsDisplay;
