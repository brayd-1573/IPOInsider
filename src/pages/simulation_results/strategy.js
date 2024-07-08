import React from "react";
import { Grid, Typography } from "@mui/material";
import { green, red } from "@mui/material/colors";

import DashboardLayout from "../../layouts/Dashboard";

import Actions from "../../components/pages/dashboard/default/Actions";
import BarChart from "../../components/pages/dashboard/default/BarChart";
import LineChart from "../../components/pages/dashboard/default/LineChart";
import DoughnutChart from "../../components/pages/dashboard/default/DoughnutChart";
import Stats from "../../components/pages/dashboard/default/Stats";
import Table from "../../components/pages/dashboard/default/Table";

function StrategyResults({ data }) {
  return (
    <React.Fragment>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant="body1">
            {JSON.stringify(data, null, 2)}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

StrategyResults.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default StrategyResults;
