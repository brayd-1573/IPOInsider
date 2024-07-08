import React, { useState } from "react";
import {
  Typography,
  Button,
  MenuItem,
  FormControl,
  Select,
  Box,
} from "@mui/material";

function NavbarFilters() {
  const [strategy, setStrategy] = useState("");

  const handleChange = (event) => {
    setStrategy(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="subtitle1" color="textPrimary">
        Portfolio Breakdown, Simulation Filters and Start
      </Typography>
    </React.Fragment>
  );
}

export default NavbarFilters;
