import React from "react";
import styled from "@emotion/styled";

import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Container,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { spacing } from "@mui/system";

const Spacer = styled.div(spacing);

const Wrapper = styled.div`
  ${spacing};
  text-align: center;
`;

const TypographyOverline = styled(Typography)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const Accordion = styled(MuiAccordion)`
  border-radius: 6px;
  text-align: left;
  margin: 20px 0 !important;
  box-shadow: 0 2px 6px 0 rgba(18, 38, 63, 0.05);

  &:before {
    display: none;
  }
`;

const AccordionSummary = styled(MuiAccordionSummary)`
  padding: 0 16px;
  box-shadow: 0;
  min-height: 48px !important;

  .MuiAccordionSummary-content {
    margin: 12px 0 !important;
  }
`;

const AccordionDetails = styled(MuiAccordionDetails)`
  padding-left: 16px;
  padding-right: 16px;
`;

function FAQ() {
  return (
    <Wrapper pt={20} pb={16}>
      <Container>
        <TypographyOverline variant="body2" gutterBottom>
          IPO Insider
        </TypographyOverline>
        <Typography variant="h2" component="h3" gutterBottom>
          Frequently asked questions
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          The questions below have been selected from those most commonly asked
          by our users.
        </Typography>
        <Spacer mb={8} />

        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} xl={8}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq1-content"
                id="faq1-header"
              >
                <Typography variant="subtitle1">
                  What is IPO Insider and how can it help me?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1" color="textSecondary">
                  IPO Insider is a comprehensive analytics platform designed to
                  provide in-depth insights into upcoming and past Initial
                  Public Offerings (IPOs). It offers real-time data, machine
                  learning predictions, and research tools to help investors
                  make informed decisions about IPO investments. By leveraging
                  data from reliable sources and advanced analytics, IPO Insider
                  aims to give users a competitive edge in the dynamic IPO
                  market.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq2-content"
                id="faq2-header"
              >
                <Typography variant="subtitle1">
                  How accurate are the predictions made by the IPO Insider's
                  machine learning model?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1" color="textSecondary">
                  Our machine learning model is trained on historical IPO data
                  and continuously updated with new information. While we strive
                  for accuracy, it's important to remember that predictions are
                  based on probabilities and past trends, and cannot guarantee
                  future outcomes. We recommend using our predictions as one of
                  several tools in your investment decision-making process.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq3-content"
                id="faq3-header"
              >
                <Typography variant="subtitle1">
                  Can I access historical IPO data through IPO Insider?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1" color="textSecondary">
                  Yes, IPO Insider provides access to extensive historical IPO
                  data. This includes detailed information about company
                  profiles, IPO dates, financials, and performance metrics
                  post-IPO. This historical data is crucial for understanding
                  market trends and making informed decisions.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq4-content"
                id="faq4-header"
              >
                <Typography variant="subtitle1">
                  Is IPO Insider suitable for first-time IPO investors?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1" color="textSecondary">
                  Absolutely! IPO Insider is designed to cater to both
                  experienced investors and beginners. The platform offers
                  user-friendly dashboards, educational resources, and
                  straightforward analytics, making it easy for first-time
                  investors to navigate the IPO landscape.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq5-content"
                id="faq5-header"
              >
                <Typography variant="subtitle1">
                  How often is the data on IPO Insider updated?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1" color="textSecondary">
                  We update our data regularly to ensure our users have the most
                  current information. IPO data is refreshed daily, while our
                  machine learning models and market news are updated in
                  real-time to reflect the latest market conditions and
                  insights.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq6-content"
                id="faq6-header"
              >
                <Typography variant="subtitle1">
                  How can I request support?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1" color="textSecondary">
                  You can use our dedicated support email (
                  <Link href="mailto:brayden.cox2005@icloud.com">
                    brayden.cox2005@icloud.com
                  </Link>
                  ) to send your issues or feedback. We are here to help.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default FAQ;
