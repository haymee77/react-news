import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { Grid } from '@material-ui/core';

const NewsPage = ({ match }) => {
  const category = match.params.category || '';

  return (
    <>
      <Grid container>
        <Grid item sm={1} md={2} />
        <Grid item sm={10} md={8}>
          <Categories />
          <NewsList category={category} />
        </Grid>
        <Grid item sm={1} md={2} />
      </Grid>
    </>
  );
};

export default NewsPage;
