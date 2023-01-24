import { useEffect } from "react";
import { useContext } from "react";
import GridContext from "../providers/Grid.provider";
import Cell from "./Cell";

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

function Grid() {
  const { grid, dispatch } = useContext(GridContext);
  
  useEffect(() => {
    dispatch('GENERATE_RANDOM_GRID');
  }, []);

  return (
    <div className="col-9">
      <div className="container border border-3 border-dark my-auto bg-light rounded-3 p-3">
        {renderGrid(grid)}
      </div>
    </div>
  );
}

export default Grid;
