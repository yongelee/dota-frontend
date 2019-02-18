import { apolloClient } from "react-apollo";
import { useContext, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { tournamentFormOptions } from "../queries/tournament/get";

import {
  UPDATE_TOURNAMENTS_FROM_API,
  FilterContext
} from "../lib/filterContext";

const TournamentCheckboxes = ({ client }) => {
  const { filterDispatch } = useContext(FilterContext);

  useEffect(() => {
    // GET TOURN DATA FROM API
    // INSERT INTO CONTEXT I BELIEVE
    // client aka apolloClient is passed down from _app to index to filteroptions to here
    client.query({ query: tournamentFormOptions }).then((data) => {
      filterDispatch({ type: UPDATE_TOURNAMENTS_FROM_API, payload: { data } });
    });
  }, []);

  return <p>hi</p>;
};

export default TournamentCheckboxes;
