import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import NextLink from "next/link";
import { Helmet } from "react-helmet-async";
import { formatISO } from "date-fns";

import { darken, lighten } from "polished";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import DashboardLayout from "../layouts/Dashboard";

import {
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

import demoEvents from "../mocks/calendar-events.json";

const calendarStyle = (props) => css`
  --fc-small-font-size: 1em;
  --fc-page-bg-color: #fff;
  --fc-neutral-bg-color: rgba(208, 208, 208, 0.3);
  --fc-neutral-text-color: #808080;
  --fc-border-color: ${props.theme.palette.divider};

  --fc-button-text-color: ${props.theme.palette.primary.contrastText};
  --fc-button-bg-color: ${props.theme.palette.primary.main};
  --fc-button-border-color: ${props.theme.palette.primary.main};
  --fc-button-hover-bg-color: ${props.theme.palette.primary.dark};
  --fc-button-hover-border-color: ${props.theme.palette.primary.dark};
  --fc-button-active-bg-color: ${props.theme.palette.primary.dark};
  --fc-button-active-border-color: ${props.theme.palette.primary.dark};

  --fc-event-bg-color: ${props.theme.palette.primary.main};
  --fc-event-border-color: ${props.theme.palette.primary.main};
  --fc-event-text-color: ${props.theme.palette.primary.contrastText};
  --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);

  --fc-more-link-bg-color: #d0d0d0;
  --fc-more-link-text-color: inherit;

  --fc-event-resizer-thickness: 8px;
  --fc-event-resizer-dot-total-width: 8px;
  --fc-event-resizer-dot-border-width: 1px;

  --fc-non-business-color: rgba(215, 215, 215, 0.3);
  --fc-bg-event-color: rgb(143, 223, 130);
  --fc-bg-event-opacity: 0.2;
  --fc-highlight-color: rgba(188, 232, 241, 0.3);
  --fc-today-bg-color: rgba(255, 220, 40, 0.15);
  --fc-now-indicator-color: red;

  --fc-daygrid-event-dot-width: 8px;
`;

const FullCalendarWrapper = styled.div`
  ${calendarStyle}
`;

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function EmptyCard({ events }) {
  const today = formatISO(new Date(), { representation: "date" });

  return (
    <Card mb={6}>
      <CardContent p={6}>
        <FullCalendarWrapper>
          <FullCalendar
            initialView="dayGridMonth"
            initialDate={today}
            plugins={[dayGridPlugin, interactionPlugin]}
            events={events}
            editable={true}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridDay,dayGridWeek,dayGridMonth",
            }}
          />
        </FullCalendarWrapper>
      </CardContent>
    </Card>
  );
}

export async function getServerSideProps() {
  const startDate = "2020-12-31";
  const endDate = new Date().toISOString().split("T")[0];

  const res = await fetch(
    `https://finnhub.io/api/v1/calendar/ipo?from=${startDate}&to=${endDate}&token=clgin01r01qha7p2nbb0clgin01r01qha7p2nbbg`
  );
  const data = await res.json();

  const formattedEvents = data.ipoCalendar.map((ipoEvent) => {
    return {
      title: `${ipoEvent.name} (${ipoEvent.symbol})`,
      start: ipoEvent.date,
    };
  });

  return {
    props: {
      events: formattedEvents,
    },
  };
}

function Calendar({ events }) {
  return (
    <React.Fragment>
      <Helmet title="IPO Calendar" />
      <Typography
        variant="h2"
        gutterBottom
        display="inline"
        align="center"
        sx={{ width: "100%", my: 4 }}
      >
        IPO Master Calendar
      </Typography>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EmptyCard events={events} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Calendar.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Calendar;
