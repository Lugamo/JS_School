/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/mainContent.scss';

const BottomBarContent = ({ pagination, location }) => {
  const path = location.pathname;
  const { page, pages } = pagination;

  // the query without last character, ex: ?page= / ?search=the&page=
  const query = location.search.slice(0, -1);
  return (
    <div className="main-bottom">
      {pages > 1
      && (
      <div className="pagination">
        {page > 1
          && (
            <div className="inline">
              <NavLink to={`${path}${query}${page - 1}`}>&laquo; Prev</NavLink>
              <NavLink to={`${path}${query}${page - 1}`}>{page - 1}</NavLink>
            </div>
          )
        }
        <NavLink to={`${path}${query}${page}`} className="active">{page}</NavLink>
        {page < pages
          && (
            <div className="inline">
              <NavLink to={`${path}${query}${page + 1}`}>{page + 1}</NavLink>
              <NavLink to={`${path}${query}${page + 1}`}>Next &raquo;</NavLink>
            </div>
          )
        }
      </div>
      )
    }
    </div>
  );
};

export default BottomBarContent;
