import React, { useState } from "react";
import {
  Typography,
  Button,
  MenuItem,
  FormControl,
  Select,
  Box,
} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function NavbarFilters() {
  const [strategy, setStrategy] = useState("");

  const handleChange = (event) => {
    setStrategy(event.target.value);
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
        <ArrowLeftIcon />
        <Typography variant="subtitle1" color="textPrimary">
          Select a strategy and run the simulation to analyze portfolio
          performance
        </Typography>
        <ArrowRightIcon />
        <Box>
          <FormControl size="small" sx={{ minWidth: 120, marginRight: 2 }}>
            <Select
              value={strategy}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Strategy1">Strategy 1</MenuItem>
              <MenuItem value="Strategy2">Strategy 2</MenuItem>
              <MenuItem value="Strategy3">Strategy 3</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={() => console.log("Simulation started")}
          >
            Run Simulation
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default NavbarFilters;
