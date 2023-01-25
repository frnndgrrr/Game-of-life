import { createEmptyArray } from "../utils/functions";

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

function applyRules(isAlive, neighbours) {
  if (isAlive === 0 && neighbours === 3) {
    return 1;
  } else if (isAlive === 1 && (neighbours < 2 || neighbours > 3)) {
    return 0;
  } else {
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
