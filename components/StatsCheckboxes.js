import { useContext } from "react";

import {
  FilterContext,
  CHECK_ALL_STATS,
  CHECK_STAT
} from "../lib/filterContext";

function StatsCheckboxes() {
  const {
    filterState: { stats },
    filterDispatch
  } = useContext(FilterContext);

  return (
    <div>
      <div>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={stats.allStats}
            onChange={() =>
              filterDispatch({
                type: CHECK_ALL_STATS,
                payload: { checked: stats.allStats }
              })
            }
          />
          Check all
        </label>
      </div>
      {Object.keys(stats).map((key, i) => (
        <label className="checkbox" key={i}>
          <input
            type="checkbox"
            checked={stats[key].checked}
            onChange={() =>
              filterDispatch({ type: CHECK_STAT, payload: { key } })
            }
          />
          {stats[key].name}
        </label>
      ))}
    </div>
  );
}

export default StatsCheckboxes;
