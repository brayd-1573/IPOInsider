import React, { useState } from "react";
import {
  Typography,
  Button,
  MenuItem,
  FormControl,
  Select,
  Box,
  IconButton,
} from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";

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
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ArrowLeft color="action" />
          <Typography variant="subtitle1" color="textPrimary">
            Select a strategy and run the simulation to analyze portfolio
            performance.
          </Typography>
          <ArrowRight color="action" />
        </Box>
        <Box>
          <FormControl size="small" sx={{ minWidth: 120, marginRight: 2 }}>
            <Select
              value={strategy}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Select a Strategy</em>
              </MenuItem>
              <MenuItem value="Strategy1">Strategy 1</MenuItem>
              <MenuItem value="Strategy2">Strategy 2</MenuItem>
              <MenuItem value="Strategy3">Strategy 3</MenuItem>
            </Select>
          </FormControl>
          <IconButton
            onClick={() => console.log("Simulation started")}
            color="primary"
          >
            <PlayCircleFilledIcon />
          </IconButton>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default NavbarFilters;
