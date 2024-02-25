import React from "react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { Helmet } from "react-helmet-async";

import DashboardLayout from "../layouts/Dashboard";

import {
  Avatar,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Card as MuiCard,
  CardActions,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid,
  Link,
  Typography as MuiTypography,
} from "@mui/material";
import { AvatarGroup as MuiAvatarGroup } from "@mui/material";
import { spacing } from "@mui/system";

import { apiKeys } from "../config";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  border-bottom: 1px solid ${(props) => props.theme.palette.grey[300]};
`;

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Chip = styled(MuiChip)`
  height: 20px;
  padding: 4px 0;
  font-size: 85%;
  background-color: ${(props) =>
    props.theme.palette[props.color ? props.color : "primary"].light};
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)};
`;

const AvatarGroup = styled(MuiAvatarGroup)`
  margin-left: ${(props) => props.theme.spacing(2)};
`;

const Article = ({ image, title, description, chip, url }) => {
  return (
    <Card>
      {image && (
        <NextLink href={url} passHref>
          <a target="_blank" rel="noopener noreferrer">
            <CardMedia image={image} title={title} />
          </a>
        </NextLink>
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        {chip}
        <Typography mb={4} color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          component="a"
          href={url}
          target="_blank"
        >
          See Article
        </Button>
      </CardActions>
    </Card>
  );
};

export async function getServerSideProps() {
  const newsApiKey = apiKeys.newsApiKey;

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=ipo&sortBy=publishedAt&pageSize=24&apiKey=${newsApiKey}`
  );
  const data = await res.json();

  return {
    props: {
      articles: data.articles,
    },
  };
}

function Articles({ articles }) {
  return (
    <React.Fragment>
      <Helmet title="Latest IPO News" />
      <Typography
        variant="h2"
        gutterBottom
        display="inline"
        align="center"
        sx={{ width: "100%", my: 4 }}
      >
        Latest IPO News
      </Typography>
      <Divider my={6} />
      <Grid container spacing={6}>
        {articles.map((article, index) => (
          <Grid item xs={12} lg={6} xl={3} key={index}>
            <Article
              title={article.title}
              description={article.description}
              chip={<Chip label={article.source.name} color="primary" />}
              image={article.urlToImage}
              url={article.url}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

Articles.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Articles;
