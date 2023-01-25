import { useContext, useState } from "react";
import GridContext from "../providers/Grid.provider";

function Settings() {
  const { dispatch } = useContext(GridContext);
  const [option, setOption] = useState("GENERATE_RANDOM_GRID");

  function handleSelect(e) {
    const action = e.target.value;
    setOption(action);
  }

  function handleRun() {
    if(option) {
      dispatch({ type: option });
    }
  }

  return (
    <div className="col-4">
      <div className="container border border-3 border-dark bg-light rounded-3 p-3 text-center">
        <h3 className="h3">Settings</h3>
        <div className="form-floating">
          <select
            className="form-select"
            onChange={handleSelect}
          >
            <option value="GENERATE_RANDOM_GRID">Random Grid</option>
            <option value="RUN_BLINKER">Blinker</option>
            <option value="RUN_TOAD">Toad</option>
            <option value="RUN_BEACON">Beacon</option>
            <option value="RUN_GLIDER">Glider</option>
            <option value="RUN_LIGHTWEIGHT">Light Weight SS</option>
          </select>
          <label htmlFor="floatingSelect">Patterns</label>
        </div>

        <div className="d-flex flex-column justify-content-between py-2">
          <button className="btn btn-primary my-1" onClick={handleRun}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
