import { generateRandomGrid } from "../utils/functions";
import { runNewGeneration } from "../logic";
import { blinker } from "../patterns/blinker";

export default function gridReducer(state, action) {
  switch (action.type) {
    case "SET_COLS":
      return {
        ...state,
        cols: action.payload,
      };

    case "SET_ROWS":
      return {
        ...state,
        rows: action.payload,
      };

    case "GENERATE_RANDOM_GRID":
      return {
        ...state,
        grid: generateRandomGrid(state.rows, state.cols),
      };

    case "GENERATE_GRID":
      return {
        ...state,
        grid: runNewGeneration(state.grid, state.rows, state.cols),
      };

    case "RUN_BLINKER":
      return {
        ...state,
        rows: 5,
        cols: 5,
        grid: blinker,
      };

    default:
      return state;
  }
}
