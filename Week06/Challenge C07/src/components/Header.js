/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
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
    this.toogleMenu = this.toogleMenu.bind(this);
  }

  toogleMenu() {
    const { sidemenuVisible } = this.state;
    this.setState({
      sidemenuVisible: !sidemenuVisible,
    });
  }

  render() {
    const { sidemenuVisible } = this.state;
    const { filterBooks } = this.props;
    return (
      <header>
        <nav type="button" className="navbar" onClick={this.toogleMenu}><i className="fas fa-bars" /></nav>
        <SideMenu visible={sidemenuVisible} closeMenu={this.toogleMenu} filterBooks={filterBooks} />
        <div className="logo"><img src={logo} alt="jobsity-logo" /></div>
        <div className="text-tittle">Bookshelf</div>
        <Search />
        <User />
      </header>
    );
  }
};

export default Header;
