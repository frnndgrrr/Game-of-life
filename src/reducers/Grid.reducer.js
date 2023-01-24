import { generateRandomGrid } from "../utils/functions";

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

    case "TICK":
      return {
        ...state,
      };

    default:
      return state;
  }
}
