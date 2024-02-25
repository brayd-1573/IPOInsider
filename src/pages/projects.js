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

/*const Project = ({ image, title, description, chip }) => {
  return (
    <Card>
      {image ? <CardMedia image={image} title="Contemplative Reptile" /> : null}
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
        <Button size="small" color="primary">
          See Article
        </Button>
      </CardActions>
    </Card>
  );
};

function Projects() {
  return (
    <React.Fragment>
      <Helmet title="Projects" />

      <Typography variant="h3" gutterBottom display="inline">
        News Articles
      </Typography>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            title="Landing page redesign"
            description="Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
            chip={<Chip label="Finished" color="success" />}
            image="/static/img/unsplash/unsplash-1.jpg"
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            title="Company posters"
            description="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa."
            chip={<Chip label="In progress" color="warning" />}
            image="/static/img/unsplash/unsplash-1.jpg"
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            title="Product page design"
            description="Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
            chip={<Chip label="Finished" color="success" />}
            image="/static/img/unsplash/unsplash-1.jpg"
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            title="Upgrade CRM software"
            description="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris."
            chip={<Chip label="In progress" color="warning" />}
            image="/static/img/unsplash/unsplash-1.jpg"
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            title="Fix form validation"
            description="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris."
            chip={<Chip label="In progress" color="warning" />}
            image="/static/img/unsplash/unsplash-1.jpg"
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            title="New company logo"
            description="Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
            chip={<Chip label="On hold" color="error" />}
            image="/static/img/unsplash/unsplash-1.jpg"
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            title="Upgrade to latest Maps API"
            description="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris."
            chip={<Chip label="Finished" color="success" />}
            image="/static/img/unsplash/unsplash-1.jpg"
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            title="Refactor backend templates"
            description="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa."
            chip={<Chip label="On hold" color="error" />}
            image="/static/img/unsplash/unsplash-1.jpg"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Projects.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Projects;*/

const Article = ({ image, title, description, chip, url }) => {
  return (
    <Card>
      {image && <CardMedia image={image} title={title} />}
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
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=ipo&sortBy=publishedAt&pageSize=16&apiKey=c4fbef2682f24ef595e3b1630a353381"
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
      <Helmet title="News Articles" />
      <Typography variant="h3" gutterBottom display="inline">
        News Articles
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
