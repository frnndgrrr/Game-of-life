import { useContext } from "react";
import GridContext from "../providers/Grid.provider";

function handleStop(e) {
  e.preventDefault();
}

function Settings() {
  const { rows, cols, dispatch } = useContext(GridContext);

  function changeRows(e) {
    const rows = Number(e.target.value);
    dispatch({ type: "SET_ROWS", payload: rows });
  }

  function changeCols(e) {
    const cols = Number(e.target.value);
    dispatch({ type: "SET_ROWS", payload: cols });
  }

  function handleRun(e) {
    e.preventDefault();
    dispatch({ type: 'TICK'})
  }

  return (
    <div className="col-3">
      <div className="container border border-3 border-dark bg-light rounded-3 p-3">
        <h3 className="h3">Settings</h3>
        <form>
          <label htmlFor="Rows" className="form-label">
            Rows
          </label>
          <input
            type="number"
            name="Rows"
            onChange={changeRows}
            min="15"
            value={rows}
          />

          <label htmlFor="Cols" className="form-label">
            Cols
          </label>
          <input
            type="number"
            name="Cols"
            onChange={changeCols}
            min="15"
            value={cols}
          />

          <div className="d-flex justify-content-evenly p-2">
            <button className="btn btn-primary" onClick={handleRun}>
              Run
            </button>
            <button className="btn btn-danger" onClick={handleStop}>
              Stop
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
