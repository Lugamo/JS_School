/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/lateralBars.scss';

class MenuOptions extends React.Component {
  constructor(props) {
    super(props);
    this.Booksby = this.Booksby.bind(this);
  }

  // onClick apply onFilterbooks (change the query value/state)
  Booksby() {
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
      <div>
        <div type="text" className="lb-tittle">MAIN</div>
        <ul className="fa-ul">
          <li onClick={this.Booksby()}>
            <i className="fa-li fas fa-globe" />
            <NavLink to="/books/all?page=1" activeStyle={{ color: 'white', textDecoration: 'none' }} exact>All</NavLink>
          </li>
          <li onClick={this.Booksby()}>
            <i className="fa-li fas fa-globe" />
            <NavLink to="/books/quito?page=1" activeStyle={{ color: 'white', textDecoration: 'none' }} exact>Quito</NavLink>
          </li>
          <li onClick={this.Booksby()}>
            <i className="fa-li fas fa-globe" />
            <NavLink to="/books/cartagena?page=1" activeStyle={{ color: 'white', textDecoration: 'none' }}>Cartagena</NavLink>
          </li>
          <li onClick={this.Booksby()}>
            <i className="fa-li fas fa-globe" />
            <NavLink to="/books/medellin?page=1" activeStyle={{ color: 'white', textDecoration: 'none' }}>Medellin</NavLink>
          </li>
          <li onClick={this.Booksby()}>
            <i className="fa-li fas fa-tablet-alt" />
            <NavLink to="/books/digital?page=1" activeStyle={{ color: 'white', textDecoration: 'none' }}>Digital</NavLink>
          </li>
          <li>
            <i className="fa-li fas fa-user-tag" />
            Personal Loans
          </li>
          <li>
            <i className="fa-li fas fa-tags" />
            New Releases
          </li>
        </ul>
      </div>
    );
  }
}

MenuOptions.propTypes = {
  closeMenu: PropTypes.func,
};

export default MenuOptions;
