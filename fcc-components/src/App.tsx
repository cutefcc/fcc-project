import { CustomSlicer } from "./stories/playGround/CustomSlicer";
import { StyledEngineProvider } from "@mui/material";
import "./App.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <CustomSlicer />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
