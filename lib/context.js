import { createContext, useReducer } from "react";

export const FilterContext = createContext();

export const initState = {
  filters: {
    kills: false,
    deaths: false,
    denies: false
  },
  tourns: {
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
  }
};

let reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_STATS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload.stats
        },
        tourns: {
          ...state.tourns,
          ...action.payload.tourns
        }
      };
    default:
      return state;
  }
};

export function FilterContextProvider(props) {
  let [state, dispatch] = useReducer(reducer, initState);
  let value = { state, dispatch };

  return (
    <FilterContext.Provider value={value}>
      {props.children}
    </FilterContext.Provider>
  );
}

export const FilterContextConsumer = FilterContext.Consumer;

export const UPDATE_SELECTED_STATS = "UPDATE_SELECTED_STATS";
