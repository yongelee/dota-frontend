import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../lib/rootStore";
import { toJS } from "mobx";

import { useContext, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { tournamentFormOptions } from "../queries/tournament/get";

const TournamentCheckboxes = observer(({ client }) => {
  const { tournamentStore } = useContext(RootStoreContext);

  useEffect(() => {
    // GET TOURN DATA FROM API
    // INSERT INTO CONTEXT I BELIEVE
    // client aka apolloClient is passed down from _app to index to filteroptions to here
    client.query({ query: tournamentFormOptions }).then((data) => {
      tournamentStore.updateTournaments(data);
    });
  }, []);

  // console.log(Map.prototype.size(tournamentStore.tournaments));
  const tournaments = toJS(tournamentStore.tournaments);
  // console.log(toJS(tournamentStore.tournaments));

  return (
    <div className="columns">
      <div className="column">
        {Object.entries(tournaments).length === 0 && (
          // this is empty
          <p>Loading...</p>
        )}
        {Object.entries(tournaments).length > 0 && (
          <>
            {/* Select all checkbox */}
            <div className="pretty p-default p-curve checkbox-style">
              <input
                type="checkbox"
                checked={tournamentStore.allTournaments}
                onChange={() => {
                  const currentCheck = tournamentStore.allTournaments;
                  tournamentStore.allTournaments = !currentCheck;
                  Object.keys(tournamentStore.tournaments).forEach((key) => {
                    tournamentStore.tournaments[key].selected = !currentCheck;
                  });
                }}
              />
              <div className="state p-success">
                <label>Select all</label>
              </div>
            </div>
            {/* Tournament check box list */}
            {Object.keys(tournaments).map((key, i) => (
              <div className="pretty p-default p-curve checkbox-style" key={i}>
                <input
                  type="checkbox"
                  checked={tournaments[key].selected}
                  onChange={() =>
                    (tournamentStore.tournaments[
                      key
                    ].selected = !tournamentStore.tournaments[key].selected)
                  }
                />
                <div className="state p-primary">
                  <label>{tournaments[key].name}</label>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
});

export default TournamentCheckboxes;
