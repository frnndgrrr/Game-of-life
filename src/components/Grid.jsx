import React, { useState } from "react";
import Cell from "./Cell";
import { generateRandomGrid } from "../utils/functions";

function renderGrid(grid) {
  return grid.map((row) => {
    return (
      <div className="row g-0">
        {row.map((col) => {
          return <Cell value={col} />;
        })}
      </div>
    );
  })
}

function Grid({ rows = 10, cols = 10}) {
  const [grid, setGrid] = useState(generateRandomGrid(rows, cols));

  return (
    <div className="col-9">
      <div className="container border border-3 border-dark my-auto bg-light rounded-3 p-3">
        {renderGrid(grid)}
      </div>
    </div>
  );
}

export default Grid;
