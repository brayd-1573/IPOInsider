import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import { Button, Box, Container, Typography, Tooltip } from "@mui/material";
import { spacing } from "@mui/system";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";

const Wrapper = styled.div`
  ${spacing};
  text-align: center;
`;

const TypographyOverline = styled(Typography)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const BrandIcon = styled.img`
  vertical-align: middle;
  height: auto;
`;

const Brand = styled.div`
  background: white;
  display: inline-block;
  padding: 12px 16px;
  border-radius: 10px;
  margin: 10px;
`;

const ArrowForward = styled(ArrowForwardIcon)`
  margin-left: ${(props) => props.theme.spacing(2)};
`;

function Integrations() {
  return (
    <Wrapper py={20}>
      <Container>
        <TypographyOverline variant="body2" gutterBottom>
          Data Integrations
        </TypographyOverline>
        <Typography variant="h2" component="h3" gutterBottom>
          Reliable and Accurate Data from Trusted Market Sources
        </Typography>

        <Box my={7}>
          <Tooltip title="Alpha Vantage">
            <Brand>
              <BrandIcon
                alt="Alpha Vantage"
                src="/static/img/brands/alphavantage.svg"
                style={{ height: "34px", margin: "3px 0" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="Bloomberg">
            <Brand>
              <BrandIcon
                alt="Bloomberg"
                src="/static/img/brands/bloomberg.svg"
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="Finnhub">
            <Brand>
              <BrandIcon
                alt="Finnhub Stock APIs"
                src="/static/img/brands/finnhub.png"
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="Yahoo Finance">
            <Brand>
              <BrandIcon
                alt="Yahoo Finance"
                src="/static/img/brands/yahoofinance.svg"
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="EOD Historical Data">
            <Brand>
              <BrandIcon
                alt="EOD Historical Data"
                src="/static/img/brands/eodhd.png"
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="IEX Cloud">
            <Brand>
              <BrandIcon
                alt="IEX Cloud"
                src="/static/img/brands/iexcloud.svg"
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>
        </Box>
        <Box>
          <Button
            component={Link}
            href="/auth/sign-in"
            target="_blank"
            variant="contained"
            color="secondary"
            size="large"
          >
            Get Started
            <ArrowForward />
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Integrations;
