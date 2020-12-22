import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import NewsList from './components/NewsList';

const apiKey = 'afa87fb5855c4866a7c973e8a0d3f206';
const App = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=' + apiKey)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Grid container>
      <Grid item sm={1} md={2} />
      <Grid item sm={10} md={8}>
        <NewsList news={news} />
      </Grid>
      <Grid item sm={1} md={2} />
    </Grid>
  );
};

export default App;
