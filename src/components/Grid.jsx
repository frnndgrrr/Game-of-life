import { useEffect, useContext } from "react";
import GridContext from "../providers/Grid.provider";
import Canvas from "./Canvas";

function Grid() {
  const { grid, rows, cols, dispatch } = useContext(GridContext);

  function drawCircle(context, x, y, r, isAlive) {
    context.fillStyle = isAlive ? "#0dcaf0" : "#6c757d";
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.fill();
  }

  function drawCanvas(context) {
    context.fillStyle = "#353535";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    const circleRad = 4;

    grid.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        let x = colIndex * (circleRad * 2 + 2) + 5;
        let y = rowIndex * (circleRad * 2 + 2) + 5;
        drawCircle(context, x, y, circleRad, col);
      });
    });
  }

  useEffect(() => {
    // Run a randomly generated grid on first render.
    dispatch({ type: "GENERATE_RANDOM_GRID" });

    // attach an interval to generate next grids periodically.
    const interval = setInterval(() => {
      dispatch({ type: "GENERATE_GRID" });
    }, 500);

    // clean interval when component gets destroyed.
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="col-8">
      <div className="container border border-3 border-dark my-auto bg-light rounded-3 p-3 text-center">
        <Canvas draw={drawCanvas} width={cols * 10} height={rows * 10} />
      </div>
    </div>
  );
}

export default Grid;
