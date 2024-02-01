import React from "react";
import styled from "@emotion/styled";

import {
  Button,
  Container,
  Grid,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";

const Spacer = styled.div(spacing);

const Typography = styled(MuiTypography)(spacing);

const Wrapper = styled.div`
  ${spacing};
  text-align: center;
  position: relative;
  background: #181d2d;
  color: ${(props) => props.theme.palette.common.white};
`;

const Subtitle = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  font-family: ${(props) => props.theme.typography.fontFamily};
  opacity: 0.75;
`;

function JoinUs() {
  return (
    <Wrapper pt={16} pb={16}>
      <Container>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Typography variant="h2" gutterBottom>
              Discover Your Next Investment Opportunity with IPO Insider
            </Typography>
            <Subtitle variant="h5" gutterBottom>
              Don't miss out on valuable insights. Join us and start making
              informed investment decisions today!
            </Subtitle>
            <Spacer mb={4} />

            <Button
              href="/auth/sign-in"
              variant="contained"
              color="primary"
              size="large"
            >
              Use IPO Insider
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default JoinUs;
