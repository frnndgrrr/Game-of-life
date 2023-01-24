import { generateRandomGrid } from "../utils/functions";
import { runNewGeneration } from "../logic";

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
      console.log("GENERATE_RANDOM_GRID");
      return {
        ...state,
        grid: generateRandomGrid(state.rows, state.cols),
      };

    case "TICK":
      console.log("TICK");
      return {
        ...state,
        grid: runNewGeneration(state.grid),
      };

    default:
      return state;
  }
}
