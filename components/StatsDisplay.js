import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";

import { statsByFilterQuery } from "../queries/filter/update";
import AverageCard from "./AverageCard";
import TotalCard from "./TotalCard";

const Wrapper = styled.div``;

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
      {statsByFilter.average.map((avg, i) => (
        <AverageCard key={i} name={avg.name} scores={avg.scores} />
      ))}
      {statsByFilter.total.map((t, i) => (
        <TotalCard key={i} name={t.name} scores={t.scores} />
      ))}
    </Wrapper>
  );
};

export default StatsDisplay;
