import { useContext } from "react";
import { useQuery } from "react-apollo-hooks";
import { tournamentFormOptions } from "../queries/tournament/get";
import {
  UPDATE_TOURNAMENTS_FROM_API,
  FilterContext
} from "../lib/filterContext";

const TournamentCheckboxes = () => {
  // GET TOURN DATA FROM API
  // INSERT INTO CONTEXT I BELIEVE
  const { filterDispatch } = useContext(FilterContext);

  const { data, error, loading } = useQuery(tournamentFormOptions);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  if (data) {
    console.log(data);
    filterDispatch({
      type: UPDATE_TOURNAMENTS_FROM_API,
      payload: { tournaments: data }
    });
  }
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
