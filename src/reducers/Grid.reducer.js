import { generateRandomGrid } from "../utils/functions";
import { runNewGeneration } from "../logic";
import { blinker, toad, beacon } from "../patterns/oscillators";
import { glider, lightweightSpaceship } from "../patterns/spaceships";

export default function gridReducer(state, action) {
  switch (action.type) {
    case "GENERATE_RANDOM_GRID":
      return {
        ...state,
        rows: 50,
        cols: 50,
        grid: generateRandomGrid(50, 50),
      };

    case "GENERATE_GRID":
      return {
        ...state,
        grid: runNewGeneration(state.grid, state.rows, state.cols),
      };

    case "RUN_BLINKER":
      return {
        ...state,
        rows: blinker.length,
        cols: blinker.length,
        grid: blinker,
      };

    case "RUN_TOAD":
      return {
        ...state,
        rows: toad.length,
        cols: toad.length,
        grid: toad,
      };

    case "RUN_BEACON":
      return {
        ...state,
        rows: beacon.length,
        cols: beacon.length,
        grid: beacon,
      };

    case "RUN_GLIDER":
      return {
        ...state,
        rows: glider.length,
        cols: glider.length,
        grid: glider,
      };

    case "RUN_LIGHTWEIGHT":
      return {
        ...state,
        rows: lightweightSpaceship.length,
        cols: lightweightSpaceship.length,
        grid: lightweightSpaceship,
      };

    default:
      return state;
  }
}
