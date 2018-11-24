/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/header.scss';
import logo from '../../assets/images/jobsity.png';
import User from './User';
import Search from './Searchbar';
import SideMenu from './Sidemenu';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidemenuVisible: false,
    };
    this.onToogleMenu = this.onToogleMenu.bind(this);
  }

  onToogleMenu() {
    const { sidemenuVisible } = this.state;
    this.setState({
      sidemenuVisible: !sidemenuVisible,
    });
  }

  render() {
    const { sidemenuVisible } = this.state;
    const { onfilterBooksApply } = this.props;
    return (
      <header>
        <nav type="button" className="navbar" onClick={this.onToogleMenu}><i className="fas fa-bars" /></nav>
        <SideMenu
          visible={sidemenuVisible}
          closeMenu={this.onToogleMenu}
          onfilterBooksApply={onfilterBooksApply}
        />

        <div className="logo"><img src={logo} alt="jobsity-logo" /></div>
        <div className="text-tittle">Bookshelf</div>
        <Search onfilterBooksApply={onfilterBooksApply} />
        <User />
      </header>
    );
  }
}

Header.propTypes = {
  onfilterBooksApply: PropTypes.func.isRequired,
};
export default Header;
