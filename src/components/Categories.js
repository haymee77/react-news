import { Breadcrumbs, makeStyles } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: '/',
    text: '전체보기',
  },
  {
    name: '/business',
    text: '비지니스',
  },
  {
    name: '/entertainment',
    text: '엔터테인먼트',
  },
  {
    name: '/health',
    text: '건강',
  },
  {
    name: '/science',
    text: '과학',
  },
  {
    name: '/sports',
    text: '스포츠',
  },
  {
    name: '/technology',
    text: '기술',
  },
];

const useStyles = makeStyles((theme) => ({
  item: {
    fontSize: '1.1rem',
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: 'none',
    cursor: 'pointer',
    paddingBottom: '0.025rem',
    color: theme.palette.grey[800],
  },
  active: {
    color: '#22b8cf',
    borderBottom: '2px solid #22b8cf',
  },
}));
const Categories = ({ category, onSelect }) => {
  const classes = useStyles();
  return (
    <Breadcrumbs separator="">
      {categories.map((cate, idx) => (
        <NavLink
          className={clsx(classes.item)}
          to={cate.name}
          activeClassName={classes.active}
          key={idx}
          exact={cate.name === '/'}
        >
          {cate.text}
        </NavLink>
      ))}
    </Breadcrumbs>
  );
};

export default Categories;
