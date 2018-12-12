import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import * as Style from './StyledMainContent';

const BottomBarContent = ({ pagination, location }) => {
  const path = location.pathname;
  const { page, pages } = pagination;

  // the query without last character, ex: ?page= / ?search=the&page=
  const query = location.search.slice(0, -1);
  return (
    <Style.MainBottom>
      {pages > 1
        && (
        <Style.Pagination>
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
        </Style.Pagination>
        )
      }
    </Style.MainBottom>
  );
};

BottomBarContent.propTypes = {
  pagination: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BottomBarContent;
