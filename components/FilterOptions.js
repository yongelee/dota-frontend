import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../lib/rootStore";

import StatsCheckboxes from "./StatsCheckboxes";
import TournamentCheckboxes from "./TournamentCheckboxes";

import "pretty-checkbox/dist/pretty-checkbox.min.css";

const FilterOptions = ({ open, client }) => {
  const { statsStore, tournamentStore } = useContext(RootStoreContext);

  return (
    <div
      className={`filter-options ${open ? "filter-opened" : "filter-closed"}`}
    >
      <div className="columns">
        <div className="column">
          <button
            className="button is-fullwidth is-info"
            onClick={() => {
              /**
               * Get selected stats
               * and tournaments from mobx stores
               * and send request to server
               * to update the results views
               */
              tournamentStore.setSelectedTournaments();
              statsStore.setSelectedAvg();
              statsStore.setSelectedTotal();
            }}
          >
            Update Results
          </button>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <p className="title is-5">Select Stats:</p>
          <StatsCheckboxes />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <p className="title is-5">Select Tournaments:</p>
          <TournamentCheckboxes client={client} />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <button
            className="button is-fullwidth is-info"
            onClick={() => {
              /**
               * Get selected stats
               * and tournaments from mobx stores
               * and send request to server
               * to update the results views
               */
              const selectedAvg = statsStore.selectedAvg;
              const selectedTotal = statsStore.selectedTotal;
              const selectedTournaments = tournamentStore.selectedTournaments;
              // console.log(selectedAvg);
              // console.log(selectedTotal);
              // console.log(selectedTournaments);
            }}
          >
            Update Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
