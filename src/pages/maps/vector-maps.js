import React from "react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { Helmet } from "react-helmet-async";

import {
  Card,
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

import World from "../../components/pages/maps/vector-maps/World";
import USA from "../../components/pages/maps/vector-maps/USA";

import DashboardLayout from "../../layouts/Dashboard";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function VectorMaps() {
  return (
    <React.Fragment>
      <Helmet title="Vector Maps" />
      <Typography variant="h3" gutterBottom display="inline">
        Vector Maps
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NextLink} href="/">
          Dashboard
        </Link>

        <Link>Maps</Link>

        <Typography>Vector Maps</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Jsvectormap
              </Typography>

              <Typography variant="body2">
                A JavaScript library for creating interactive maps.{" "}
                <Link href="https://github.com/kadoshms/react-jvectormap">
                  Documentation & map downloads
                </Link>
                .
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <World />
        </Grid>
        <Grid item xs={12} lg={6}>
          <USA />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

VectorMaps.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default VectorMaps;
