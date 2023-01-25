import { createEmptyArray } from "../utils/functions";

// Cycle through the surroundings of a cell
// using a -1 to +1 range starting from x and y coordinates.
// Note: It is possible to calculate a wrap around
// the grid by using the modulus operator.
function sumNeighbours(grid, x, y, cols, rows) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

// Evaluate rules for next status of the cell
function applyRules(isAlive, neighbours) {
  // Dead cell & 3 neighbours => reproduction
  if (isAlive === 0 && neighbours === 3) {
    return 1;
  }
  // Alive cell & less than 2 neighbours => underpopulation
  // Alive cell & more than 3 neighbours => overpopulation
  else if (isAlive === 1 && (neighbours < 2 || neighbours > 3)) {
    return 0;
  }
  // Any Alive cell with 2 or 3 live neighbours survives.
  // (Remains the same)
  else {
    return isAlive;
  }
}

export function runNewGeneration(grid, rows, cols) {
  const newGrid = createEmptyArray(rows, cols);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let neighbours = sumNeighbours(grid, i, j, rows, cols);
      newGrid[i][j] = applyRules(grid[i][j], neighbours);
    }
  }
  return newGrid;
}
