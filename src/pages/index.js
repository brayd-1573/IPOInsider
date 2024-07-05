import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import DashboardLayout from "../layouts/Dashboard";
import {
  Typography as MuiTypography,
  Divider as MuiDivider,
  Grid,
} from "@mui/material";
import { spacing } from "@mui/system";

const Divider = styled(MuiDivider)(spacing);
const Typography = styled(MuiTypography)(spacing);

function Index() {
  return (
    <React.Fragment>
      <Helmet title="Portfolio Simulator" />
      <Typography
        variant="h6"
        gutterBottom
        display="inline"
        align="center"
        sx={{ width: "100%", my: 4 }}
      >
        Strategy Performance
      </Typography>
      <Divider my={6} />
      <Grid container spacing={6}>
        {/* components here */}
      </Grid>
      <Divider my={6} />
      <Typography
        variant="h6"
        gutterBottom
        display="inline"
        align="center"
        sx={{ width: "100%", my: 4 }}
      >
        Portfolio Results
      </Typography>
      <Divider my={6} />
      <Grid container spacing={6}>
        {/* components here */}
      </Grid>
    </React.Fragment>
  );
}

Index.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Index;
