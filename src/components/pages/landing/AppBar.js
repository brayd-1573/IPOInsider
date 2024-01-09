import React from "react";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import Link from "next/link";

import {
  AppBar,
  Button as MuiButton,
  Container,
  Grid,
  Box,
  Toolbar,
} from "@mui/material";

import Logo from "../../../vendor/logo.svg";

const Button = styled(MuiButton)(spacing);

const Brand = styled.div`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const BrandIcon = styled(Logo)`
  margin-right: ${(props) => props.theme.spacing(2)};
  margin-top: -2px;
  color: ${(props) => props.theme.sidebar.header.brand.color};
  fill: ${(props) => props.theme.sidebar.header.brand.color};
  width: 32px;
  height: 32px;

  vertical-align: middle;
  display: inline;
`;

const AppBarComponent = () => (
  <React.Fragment>
    <AppBar position="relative" color="transparent" elevation={0}>
      <Toolbar>
        <Container>
          <Grid container alignItems="center">
            <Grid item>
              <Brand>
                <BrandIcon /> IPOInsider
              </Brand>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  href="/dashboard/analytics"
                  target="_blank"
                >
                  Features
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  href="/pages/pricing"
                  target="_blank"
                >
                  Pricing
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  href="/documentation/support"
                  target="_blank"
                >
                  Contact Us
                </Button>
              </Box>
              <Button
                ml={2}
                color="primary"
                variant="contained"
                href="/auth/sign-in"
                target="_blank"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default AppBarComponent;
