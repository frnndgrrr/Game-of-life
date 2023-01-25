import { createContext, useReducer } from "react";
import gridReducer from '../reducers/Grid.reducer'
import { generateRandomGrid } from "../utils/functions";

const rows = 50;
const cols = 65;
const debug = 20;

const initState = {
  grid: generateRandomGrid(cols, rows),
  rows,
  cols,
}

const debugInitState = {
  grid: generateRandomGrid(debug, debug),
  rows: debug,
  cols: debug
}

const GridContext = createContext();
export default GridContext;

export function GridProvider({ children }) {
  const [state, dispatch] = useReducer(gridReducer, debugInitState);
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
