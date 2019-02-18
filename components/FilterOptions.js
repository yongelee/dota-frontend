import { useContext } from "react";
import { FilterContext } from "../lib/filterContext";
import StatsCheckboxes from "./StatsCheckboxes";
import TournamentCheckboxes from "./TournamentCheckboxes";
import { SelectedContext, UPDATE_SELECTED } from "../lib/selectedContext";

const FilterOptions = ({ open }) => {
  const { filterState } = useContext(FilterContext);

  const { selectedDispatch } = useContext(SelectedContext);

  return (
    <div
      className={`filter-options ${open ? "filter-opened" : "filter-closed"}`}
    >
      <div className="columns">
        <div className="column">
          <button
            onClick={() => {
              // get all selected stats from state
              const statsSelected = [];
              Object.keys(filterState.stats).map(key => {
                if (filterState.stats[key].checked) {
                  statsSelected.push(key);
                }
              });
              if (statsSelected.length === 0) {
                alert("You need to select some stats");
              } else {
                // update the selected context
                selectedDispatch({
                  type: UPDATE_SELECTED,
                  payload: { statsSelected }
                });
              }
            }}
          >
            submit
          </button>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <StatsCheckboxes />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <TournamentCheckboxes />
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
