import axios from 'axios';
import React, { useState, useEffect } from 'react';
import usePromise from '../lib/usePromise';
import NewsItem from './NewsItem';

const apiKey = 'afa87fb5855c4866a7c973e8a0d3f206';

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    return axios.get(
      'https://newsapi.org/v2/top-headlines?country=kr&category=' +
        category +
        '&apiKey=' +
        apiKey
    );
  }, [category]);

  if (loading) {
    return <div>준비중..</div>;
  }

  if (error) {
    return <div>에러 발생!</div>;
  }

  if (response) {
    const { articles } = response.data;

    return (
      <div>
        {articles &&
          articles.map((article, idx) => (
            <NewsItem article={article} key={idx} />
          ))}
      </div>
    );
  }

  return <div>준비중..</div>;
};

export default NewsList;
