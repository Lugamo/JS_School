/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import '../../styles/header.scss';
import logo from '../../../assets/images/jobsity.png';
import User from './user';
import Search from './searchbar';
import SideMenu from './sidemenu';

const React = require('react');
// const ReactDOM = require('react-dom');

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
    return (
      <header>
        <nav type="button" className="navbar" onClick={this.toogleMenu}><i className="fas fa-bars" /></nav>
        <SideMenu visible={sidemenuVisible} closeMenu={this.toogleMenu} />
        <div className="logo"><img src={logo} alt="jobsity-logo" /></div>
        <div className="text-tittle">Bookshelf</div>
        <Search />
        <User />
      </header>
    );
  }
};

export default Header;
