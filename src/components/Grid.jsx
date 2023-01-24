import { useEffect, useContext, useRef } from "react";
import GridContext from "../providers/Grid.provider";

function drawCircle(context, x, y, r, isAlive) {
  context.fillStyle = isAlive ? "#0dcaf0" : "#6c757d";
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI);
  context.fill();
}

function drawCanvas(context, grid) {
  context.fillStyle = "#353535";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  const circleRad = 4;

  grid.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      let x = colIndex * (circleRad*2+2) +5;
      let y = rowIndex * (circleRad*2+2) +5;
      drawCircle(context, x, y, circleRad, col);
    });
  });
}

function Grid() {
  const { grid, rows, cols, dispatch } = useContext(GridContext);
  const canvasRef = useRef(null);
  
  // Run a randomly generated grid on first render. 
  useEffect(() => {
    dispatch({ type: 'GENERATE_RANDOM_GRID'});
  }, [])

  // Render everytime grid changes. 
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    drawCanvas(context, grid);

  }, [grid]);

  return (
    <div className="col-9">
      <div className="container border border-3 border-dark my-auto bg-light rounded-3 p-3">
        <canvas id="grid" width={cols*10} height={rows*10} ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

export default Grid;
