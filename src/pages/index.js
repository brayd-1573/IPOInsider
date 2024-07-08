import React, { useState } from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import DashboardLayout from "../layouts/Dashboard";
import {
  Typography as MuiTypography,
  Divider as MuiDivider,
  Grid,
} from "@mui/material";
import { spacing } from "@mui/system";

import StrategyResults from "./simulation_results/strategy";
import PortfolioResults from "./simulation_results/portfolio";
import Navbar from "../components/navbar/Navbar";

const Divider = styled(MuiDivider)(spacing);
const Typography = styled(MuiTypography)(spacing);

function Index() {
  const [simulationData, setSimulationData] = useState({});

  const handleSimulationRun = (data) => {
    setSimulationData(data);
  };

  return (
    <React.Fragment>
      <Helmet title="Portfolio Simulator" />
      <Navbar onSimulationRun={handleSimulationRun} />
      <Typography
        variant="h2"
        gutterBottom
        display="inline"
        align="center"
        sx={{ width: "100%", my: 4 }}
      >
        Strategy Performance
      </Typography>
      <Divider my={6} />
      <StrategyResults data={simulationData} />
      <Typography
        variant="h2"
        gutterBottom
        display="inline"
        align="center"
        sx={{ width: "100%", my: 4 }}
      >
        Portfolio Results
      </Typography>
      <Divider my={6} />
      <PortfolioResults data={simulationData} />
    </React.Fragment>
  );
}

Index.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Index;
