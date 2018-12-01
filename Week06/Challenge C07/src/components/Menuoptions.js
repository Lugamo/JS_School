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
  Booksby(location, title) {
    return () => {
      const { onFilterBooksApply } = this.props;
      const { closeMenu } = this.props;
      /**
       * Check if closeMenu is a prop
       * this component have two parents. One send closeMenu prop, other one NOT
       * */
      if (closeMenu) {
        closeMenu();
      }
      onFilterBooksApply(location, title);
    };
  }

  render() {
    return (
      // NavLinks to apply styles in React Router Links
      <div>
        <div type="text" className="lb-tittle">MAIN</div>
        <ul className="fa-ul">
          <li onClick={this.Booksby('', 'All')}>
            <i className="fa-li fas fa-globe" />
            <NavLink to="/books/All" activeStyle={{ color: 'white', textDecoration: 'none' }} exact>All</NavLink>
          </li>
          <li onClick={this.Booksby('?city=Quito', 'Quito')}>
            <i className="fa-li fas fa-globe" />
            <NavLink to="/books/Quito" activeStyle={{ color: 'white', textDecoration: 'none' }} exact>Quito</NavLink>
          </li>
          <li onClick={this.Booksby('?city=Cartagena', 'Cartagena')}>
            <i className="fa-li fas fa-globe" />
            <NavLink to="/books/Cartagena" activeStyle={{ color: 'white', textDecoration: 'none' }}>Cartagena</NavLink>
          </li>
          <li onClick={this.Booksby('?city=Medellin', 'Medellin')}>
            <i className="fa-li fas fa-globe" />
            <NavLink to="/books/Medellin" activeStyle={{ color: 'white', textDecoration: 'none' }}>Medellin</NavLink>
          </li>
          <li onClick={this.Booksby('?digital=true', 'Digital')}>
            <i className="fa-li fas fa-tablet-alt" />
            <NavLink to="/books/Digital" activeStyle={{ color: 'white', textDecoration: 'none' }}>Digital</NavLink>
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
  onFilterBooksApply: PropTypes.func.isRequired,
  closeMenu: PropTypes.func,
};

export default MenuOptions;
