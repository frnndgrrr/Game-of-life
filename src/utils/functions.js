function generateRandomCell() {
  return Math.floor(Math.random() * 100) % 2;
}

export function generateRandomGrid(rows, cols) {
  const grid = Array.from({ length: rows }, (row) => {
    return Array.from({ length: cols }, (col) => {
      return generateRandomCell();
    });
  });
  return grid;
}
