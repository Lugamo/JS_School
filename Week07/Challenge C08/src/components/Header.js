/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../styles/header.scss';
import logo from '../../assets/images/jobsity.png';
import User from './User';
import Search from './SearchBar';
import SideMenu from './SideMenu';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidemenuVisible: false,
    };
    this.onToogleMenu = this.onToogleMenu.bind(this);
  }

  // Show the side bar menu on click
  onToogleMenu() {
    const { sidemenuVisible } = this.state;
    this.setState({
      sidemenuVisible: !sidemenuVisible,
    });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { history, user } = this.props;
    const { sidemenuVisible } = this.state;
    return (
      <header>
        <nav type="button" className="navbar" onClick={this.onToogleMenu}><i className="fas fa-bars" /></nav>
        <SideMenu
          visible={sidemenuVisible}
          closeMenu={this.onToogleMenu}
        />

        <div className="logo"><img src={logo} alt="jobsity-logo" /></div>
        <div className="text-tittle">Bookshelf</div>
        <Search history={history} />
        <User user={user} />
      </header>
    );
  }
}

export default Header;
