import { createContext, useReducer } from "react";

import stats from "./stats";

export const FilterContext = createContext();

let initState = {
  allStats: false,
  stats,
  tournaments: []
};

let reducer = (state, action) => {
  switch (action.type) {
    case CHECK_ALL_STATS:
      const keys = Object.keys(state.stats);
      const statsUpdated = {};

      keys.forEach(key => {
        statsUpdated[key] = {
          ...state.stats[key],
          checked: !state.allStats
        };
      });

      return {
        ...state,
        allStats: !state.allStats,
        stats: statsUpdated
      };
    case CHECK_STAT:
      return {
        ...state,
        stats: {
          ...state.stats,
          [action.payload.key]: {
            ...state.stats[action.payload.key],
            checked: !state.stats[action.payload.key].checked
          }
        }
      };
    default:
      return state;
  }
};

export function FilterContextProvider(props) {
  let [state, dispatch] = useReducer(reducer, initState);
  let value = { filterState: state, filterDispatch: dispatch };

  return (
    <FilterContext.Provider value={value}>
      {props.children}
    </FilterContext.Provider>
  );
}

export const FilterContextConsumer = FilterContext.Consumer;

export const CHECK_ALL_STATS = "CHECK_ALL_STATS";
export const CHECK_STAT = "CHECK_STAT";
