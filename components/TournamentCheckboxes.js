import { useContext } from "react";
import { useQuery } from "react-apollo-hooks";
import { tournamentFormOptions } from "../queries/tournament/get";

const TournamentCheckboxes = () => {
  // const { data, error, loading } = useQuery(tournamentFormOptions);

  // const { dispatch } = useContext(FilterContext);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error...</p>;

  // return (
  //   <div>
  //     {data.tournamentFormOptions.map(tournament => (
  //       <p key={tournament.id}>{tournament.name}</p>
  //     ))}
  //   </div>
  // );
  return <p>hi</p>;
};

export default TournamentCheckboxes;
