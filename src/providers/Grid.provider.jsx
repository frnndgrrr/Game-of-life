import { createContext, useReducer } from "react";
import gridReducer from '../reducers/Grid.reducer'
import { generateRandomGrid } from "../utils/functions";

const squareValue = 50;

const squareGrid = {
  grid: generateRandomGrid(squareValue, squareValue),
  rows: squareValue,
  cols: squareValue
}

const GridContext = createContext();
export default GridContext;

export function GridProvider({ children }) {
  const [state, dispatch] = useReducer(gridReducer, squareGrid);
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
