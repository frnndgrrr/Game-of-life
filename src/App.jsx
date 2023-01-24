import Grid from "./components/Grid";
import Settings from "./components/Settings";
import Title from "./components/Title";
import { GridProvider } from "./providers/Grid.provider";

function App() {
  return (
    <div className="container mx-auto">
      <GridProvider>
        <Title title="Game of Life" />
        <div className="row g-0">
          <Grid />
          <Settings />
        </div>
      </GridProvider>
    </div>
  );
}

export default App;
