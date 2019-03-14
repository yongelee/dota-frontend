import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";

import { statsByFilterQuery } from "../queries/filter/update";
import AverageCard from "./AverageCard";
import TotalCard from "./TotalCard";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StatsDisplay = ({ tournaments, avg, total, limit }) => {
  const {
    data: { statsByFilter },
    loading,
    error
  } = useQuery(statsByFilterQuery, {
    variables: {
      data: {
        tourn_ids: tournaments,
        avgOptions: avg,
        totalOptions: total,
        limit: Number(limit)
      }
    },
    fetchPolicy: "network-only"
  });

  if (loading) return <div className="stats-row">Loading...</div>;
  if (error) return <div className="stats-row">Error...</div>;

  return (
    <Wrapper className="stats-row">
      <div className="columns is-variable is-8">
        <div className="column">
          <p className="subtitle is-3 has-text-white">Average rankings:</p>
          <hr />
          {statsByFilter.average.map((avg, i) => (
            <AverageCard key={i} name={avg.name} scores={avg.scores} />
          ))}
        </div>
        <div className="column">
          <p className="subtitle is-3 has-text-white">
            Highest score rankings:
          </p>
          <hr />
          {statsByFilter.total.map((t, i) => (
            <TotalCard key={i} name={t.name} scores={t.scores} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default StatsDisplay;
