import { useState, useContext } from "react";
import { FilterContext, UPDATE_SELECTED_STATS } from "../lib/context";

const FilterOptions = ({ open }) => {
  const [stats, setStats] = useState({
    kills: false,
    deaths: false,
    denies: false
  });

  const [tourns, setTourns] = useState({
    ["z12312"]: {
      checked: false,
      name: "PGL Open manz"
    },
    ["f3512"]: {
      checked: false,
      name: "Bucharest Major"
    },
    ["ak32"]: {
      checked: false,
      name: "ESL One Hamburg"
    }
  });

  const { dispatch } = useContext(FilterContext);

  return (
    <div
      className={`filter-options ${open ? "filter-opened" : "filter-closed"}`}
    >
      <form
        onSubmit={e => {
          e.preventDefault();

          dispatch({ type: UPDATE_SELECTED_STATS, payload: { stats, tourns } });
        }}
      >
        <div className="columns">
          <div className="column">
            <button type="submit">submit</button>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={stats.kills}
                onChange={() => setStats({ ...stats, kills: !stats.kills })}
              />
              Kills
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                checked={stats.deaths}
                onChange={() => setStats({ ...stats, deaths: !stats.deaths })}
              />
              Deaths
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                checked={stats.denies}
                onChange={() => setStats({ ...stats, denies: !stats.denies })}
              />
              Denies
            </label>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            {Object.keys(tourns).map((key, i) => (
              <label className="checkbox" key={i}>
                <input
                  type="checkbox"
                  checked={tourns[key].checked}
                  onChange={() =>
                    setTourns({
                      ...tourns,
                      [key]: {
                        ...tourns[key],
                        checked: !tourns[key].checked
                      }
                    })
                  }
                />
                {tourns[key].name}
              </label>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterOptions;
