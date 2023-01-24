import { createContext, useReducer } from "react";
import gridReducer from '../reducers/Grid.reducer'
import { generateRandomGrid } from "../utils/functions";

const initState = {
  grid: generateRandomGrid(15,15),
  rows: 15,
  cols: 15,
  tick: 500
}

const GridContext = createContext();
export default GridContext;

export function GridProvider({ children }) {
  const [state, dispatch] = useReducer(gridReducer, initState);
  const { grid, rows, cols } = state;

  return (
    <GridContext.Provider
      value={{
        grid,
        rows,
        cols,
        dispatch
      }}
    >
      {children}
    </GridContext.Provider>
  );
}
