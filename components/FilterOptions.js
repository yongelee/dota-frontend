import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../lib/rootStore";

import StatsCheckboxes from "./StatsCheckboxes";
import TournamentCheckboxes from "./TournamentCheckboxes";

import "pretty-checkbox/dist/pretty-checkbox.min.css";

const FilterOptions = observer(({ open, client }) => {
  const [limit, setLimit] = useState(10);
  const { statsStore, tournamentStore } = useContext(RootStoreContext);

  return (
    <div
      className={`filter-options ${open ? "filter-opened" : "filter-closed"}`}
    >
      <div className="filter-wrapper">
        <div className="columns">
          <div className="column">
            <p className="subtitle has-text-white">Top number rankings:</p>
            <div className="select is-fullwidth">
              <select value={limit} onChange={(e) => setLimit(e.target.value)}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
              </select>
            </div>
          </div>
          <div className="column">
            <p className="title is-5 has-text-white">Select Stats:</p>
            <StatsCheckboxes />
          </div>
          <div className="column">
            <p className="title is-5 has-text-white">Select Tournaments:</p>
            <TournamentCheckboxes client={client} />
          </div>
          <div className="column">
            <button
              className="button is-fullwidth is-large"
              onClick={() => {
                /**
                 * Get selected stats
                 * and tournaments from mobx stores
                 * and send request to server
                 * to update the results views
                 */
                tournamentStore.limit = limit;
                tournamentStore.setSelectedTournaments();
                statsStore.setSelectedAvg();
                statsStore.setSelectedTotal();
              }}
            >
              Update Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FilterOptions;
