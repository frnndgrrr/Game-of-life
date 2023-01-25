import {
  generateRandomGrid,
  generateRandomCell,
  createEmptyArray,
} from "./functions";

describe("Testing functions.js", () => {
  it("generateRandomCell output should be 0 or 1", () => {
    const cell = generateRandomCell();
    expect(cell).not.toBeGreaterThan(1);
    expect(cell).not.toBeLessThan(0);
  });

  it("generateRandomGrid dimensions should match params", () => {
    const rows = 10;
    const cols = 10;
    const grid = generateRandomGrid(rows, cols);
    expect(grid.length).toBe(rows);
    expect(grid[0].length).toBe(cols);
  });

  it("createEmptyArray should only contain zeros", () => {
    const rows = 10;
    const cols = 10;
    const emptyArr = createEmptyArray(rows, cols);
    emptyArr.forEach((arr) => {
      expect(arr).toContain(0);
      expect(arr).not.toContain(1);
    });
  });
});
