import React from "react";
import styled from "@emotion/styled";
import { rgba } from "polished";
import Link from "next/link";

import { Button, Box, Container, Grid, Typography } from "@mui/material";
import { spacing } from "@mui/system";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";

import {
  Activity as ActivityIcon,
  Cpu as CpuIcon,
  BookOpen as BookIcon,
  Calendar as CalendarIcon,
  Tv as TvIcon,
  Clock as ClockIcon,
} from "react-feather";

const Wrapper = styled.div`
  ${spacing};
  background: ${(props) => props.theme.palette.background.paper};
  text-align: center;
`;

const TypographyOverline = styled(Typography)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const FeatureWrapper = styled.div`
  display: flex;
  text-align: left;
  padding: 18px 20px;
`;

const FeatureIcon = styled.div`
  svg {
    flex-shrink: 0;
    width: auto;
    height: 48px;
    width: 48px;
    background: ${(props) => rgba(props.theme.palette.primary.main, 0.15)};
    color: ${(props) => props.theme.palette.primary.main};
    padding: 10px;
    border-radius: 50%;
  }
`;

const ArrowForward = styled(ArrowForwardIcon)`
  margin-left: ${(props) => props.theme.spacing(2)};
`;

const Feature = ({ Icon, title, description }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <FeatureWrapper>
        <FeatureIcon>
          <Icon />
        </FeatureIcon>
        <Box ml={6}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </Box>
      </FeatureWrapper>
    </Grid>
  );
};

function Features() {
  return (
    <Wrapper py={20}>
      <Container>
        <TypographyOverline variant="body2" gutterBottom>
          Features
        </TypographyOverline>
        <Typography variant="h2" component="h3" gutterBottom>
          Analysts love IPO Insider
        </Typography>
        <Box mb={8} />
        <Grid container spacing={6}>
          <Feature
            Icon={ActivityIcon}
            title="Customizable Dashboards"
            description="Experience personalized dashboards tailored for IPO analysis, offering a range of widgets and data visualization tools for in-depth market insights."
          />
          <Feature
            Icon={CpuIcon}
            title="IPO Prediction Model"
            description="Leverage our advanced machine learning model to predict IPO success, utilizing historical data and market trends for informed decision-making."
          />
          <Feature
            Icon={BookIcon}
            title="Research Notes"
            description="Efficiently organize and access your research notes, providing a centralized platform for detailed company analyses and market observations."
          />
          <Feature
            Icon={CalendarIcon}
            title="IPO Master Calendar"
            description="Stay ahead with our comprehensive IPO calendar, tracking upcoming listings with detailed information to plan your investment strategies."
          />
          <Feature
            Icon={TvIcon}
            title="News Articles"
            description="Access curated news articles and updates, keeping you informed on the latest IPO developments and market trends in real-time."
          />
          <Feature
            Icon={ClockIcon}
            title="Real-Time Data"
            description="Get real-time updates and live market data, ensuring you have the most current information at your fingertips for quick and accurate analysis."
          />
        </Grid>

        <Box mt={4}>
          <Button
            component={Link}
            href="/auth/sign-in"
            variant="contained"
            color="secondary"
            size="large"
            target="_blank"
          >
            Try our Features
            <ArrowForward />
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Features;
