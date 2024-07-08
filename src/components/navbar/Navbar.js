import React from "react";
import styled from "@emotion/styled";
import { AppBar as MuiAppBar, Toolbar, Box } from "@mui/material";
import NavbarFilters from "./NavbarFilters";

const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
`;

const Navbar = ({ onSimulationRun }) => {
  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <NavbarFilters onSimulationRun={onSimulationRun} />
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
