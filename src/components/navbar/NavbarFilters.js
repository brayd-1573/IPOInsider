import React, { useState } from "react";
import {
  Typography,
  Button,
  MenuItem,
  FormControl,
  Select,
  Box,
} from "@mui/material";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";

function NavbarFilters({ onSimulationRun }) {
  const [strategy, setStrategy] = useState("");

  const handleChange = (event) => {
    setStrategy(event.target.value);
  };

  const handleRunSimulation = async () => {
    const response = await fetch(
      `https://portfolio-simulator-fast-api.vercel.app/run?strategy=${strategy}`
    );
    const data = await response.json();
    onSimulationRun(data);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2,
          justifyContent: "space-between",
        }}
      >
        <CandlestickChartIcon />
        <Typography variant="subtitle1" color="textPrimary">
          Select a strategy and run the simulation to analyze portfolio
          performance
        </Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={strategy}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Momentum">Momentum</MenuItem>
            <MenuItem value="Mean Reversion">Mean Reversion</MenuItem>
            <MenuItem value="Market Making">Market Making</MenuItem>
            <MenuItem value="Statistical Arbitrage">
              Statistical Arbitrage
            </MenuItem>
            <MenuItem value="Sentiment Based">Sentiment Based</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" onClick={handleRunSimulation}>
          Run Simulation
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default NavbarFilters;
