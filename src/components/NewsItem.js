import React from 'react';
import { Grid, Link, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  thumbnail: {
    width: '100%',
  },
  title: {
    lineHeight: '1.2',
    '& a': { color: '#000000' },
  },
  article: {
    paddingLeft: theme.spacing(1),
  },
}));

const NewsItem = ({ article }) => {
  const classes = useStyles();
  console.log(article);
  const {
    urlToImage,
    title,
    url,
    source,
    publishedAt,
    description,
    author,
    content,
  } = article;

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item sm={4} md={3} lg={2}>
        <img
          src={
            urlToImage
              ? urlToImage
              : 'https://via.placeholder.com/120x80?text=No Image'
          }
          alt="thumbnail"
          className={classes.thumbnail}
        />
      </Grid>
      <Grid item sm={8} md={9} lg={10} className={classes.article}>
        <Typography variant="h6" className={classes.title}>
          <Link href={url} underline="always">
            {title}
          </Link>
        </Typography>
        <Typography variant="body1">
          {description.length > 80
            ? `${description.substring(0, 80)}...`
            : description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NewsItem;
