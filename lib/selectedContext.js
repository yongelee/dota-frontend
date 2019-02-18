import { createContext, useReducer } from "react";

export const SelectedContext = createContext();

let initState = {
  statsSelected: [],
  tournamentsSelected: []
};

let reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SELECTED:
      return {
        ...state,
        statsSelected: action.payload.statsSelected
      };
    default:
      return state;
  }
};

export function SelectedContextProvider(props) {
  let [state, dispatch] = useReducer(reducer, initState);
  let value = { selectedState: state, selectedDispatch: dispatch };

  return (
    <SelectedContext.Provider value={value}>
      {props.children}
    </SelectedContext.Provider>
  );
}

export const SelectedContextConsumer = SelectedContext.Consumer;

export const UPDATE_SELECTED = "UPDATE_SELECTED";
