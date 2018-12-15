/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Style from './StyledSideBars';

class MenuOptions extends React.Component {
  constructor(props) {
    super(props);
    this.booksBy = this.booksBy.bind(this);
  }

  // onClick apply onFilterbooks (change the query value/state)
  booksBy() {
    return () => {
      const { closeMenu } = this.props;
      if (closeMenu) {
        closeMenu();
      }
    };
  }

  render() {
    return (
      // NavLinks to apply styles in React Router Links
      <Fragment>
        <Style.SideTitle width="78.76px">MAIN</Style.SideTitle>
        <ul className="fa-ul">
          <li onClick={this.booksBy()}>
            <i className="fa-li fas fa-globe" />
            <NavLink to="/books/all?page=1" activeStyle={{ color: 'white' }} exact>All</NavLink>
          </li>
          <li onClick={this.booksBy()}>
            <i className="fa-li fas fa-globe" />
            <NavLink to="/books/quito?page=1" activeStyle={{ color: 'white' }} exact>Quito</NavLink>
          </li>
          <li onClick={this.booksBy()}>
            <i className="fa-li fas fa-globe" />
            <NavLink to="/books/cartagena?page=1" activeStyle={{ color: 'white' }}>Cartagena</NavLink>
          </li>
          <li onClick={this.booksBy()}>
            <i className="fa-li fas fa-globe" />
            <NavLink to="/books/medellin?page=1" activeStyle={{ color: 'white' }}>Medellin</NavLink>
          </li>
          <li onClick={this.booksBy()}>
            <i className="fa-li fas fa-tablet-alt" />
            <NavLink to="/books/digital?page=1" activeStyle={{ color: 'white' }}>Digital</NavLink>
          </li>
          <li onClick={this.booksBy()}>
            <i className="fa-li fas fa-user-tag" />
            <NavLink to="/books/me?page=1" activeStyle={{ color: 'white' }}>Personal Loans</NavLink>
          </li>
          <li>
            <i className="fa-li fas fa-tags" />
            New Releases
          </li>
        </ul>
      </Fragment>
    );
  }
}

MenuOptions.propTypes = {
  closeMenu: PropTypes.func,
};

export default MenuOptions;
