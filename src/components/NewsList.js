import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
  return (
    <div>
      {news &&
        news.map((article, idx) => <NewsItem article={article} key={idx} />)}
    </div>
  );
};

export default NewsList;
