import "./App.css";
import Table from "./components/Table/table";
import HistogramData from "./components/Histogram/index";
import { Box, Typography } from "@mui/material";
function App() {
  return (
    <div className="App">
      <Table />
      <Box>
        <Typography variant="h6">UserGuide</Typography>
        <Typography variant="body1">
          1. Double click on the cell to edit
        </Typography>
        <Typography variant="body1">
          2. Select the checkbox to choose which column to export to csv
        </Typography>
        <Typography variant="body1">
          3. Click on the button to export to csv / pdf (with pdf choose print
          then save as pdf)
        </Typography>
      </Box>
      <HistogramData />
    </div>
  );
}

export default App;
