import Grid from "./components/Grid";
import Controls from "./components/Controls";
import Title from "./components/Title";

function App() {
  return (
    <div className="container mx-auto">
      <Title title="Game of Life"/>
      <div className="row g-0">
        <Grid rows={15} cols={15} />
        <Controls />
      </div>
    </div>
  );
}

export default App;
