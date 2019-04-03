import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import { RootStoreContext } from "../lib/rootStore";
import StatsCheckboxes from "./StatsCheckboxes";
import TournamentCheckboxes from "./TournamentCheckboxes";

import "pretty-checkbox/dist/pretty-checkbox.min.css";

const Wrapper = styled.div`
  margin-right: 1rem;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 0px 0px 20px 3px black;
  padding: 1rem;
  background-color: black;
  border: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 5;
`;

// .filter-options {
// }

// .filter-wrapper {
// }

const FilterOptions = observer(({ open, client }) => {
  const [limit, setLimit] = useState(10);
  const [played, setPlayed] = useState(10);
  const { statsStore, tournamentStore } = useContext(RootStoreContext);

  return (
    <Wrapper
      className={`filter-options ${open ? "filter-opened" : "filter-closed"}`}
    >
      <div className="filter-wrapper">
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">
                <button
                  className="button is-fullwidth is-large is-warning"
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
            <div className="columns">
              <div className="column">
                <p className="title is-5 has-text-white">
                  Select number of results:
                </p>
                <div className="select is-fullwidth is-info">
                  <select
                    value={limit}
                    onChange={(e) => setLimit(e.target.value)}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <p className="title is-5 has-text-white">
                  Select minimum games played:
                </p>

                <div className="select is-fullwidth is-info">
                  <select
                    value={played}
                    onChange={(e) => setPlayed(e.target.value)}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <p className="title is-5 has-text-white">Select Stats:</p>

            <StatsCheckboxes />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <p className="title is-5 has-text-white">Select Tournaments:</p>
            <TournamentCheckboxes client={client} />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <button
              className="button is-fullwidth is-large is-warning"
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
    </Wrapper>
  );
});

export default FilterOptions;

// <div className="column">
//             <p className="title is-5 has-text-white">Select Stats:</p>
//             <StatsCheckboxes />
//           </div>
//           <div className="column">
//             <p className="title is-5 has-text-white">Select Tournaments:</p>
//             <TournamentCheckboxes client={client} />
//           </div>
