/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import logo from '../assets/images/jobsity.png';
import userlogo from '../assets/images/user.png';
import SideMenu from './SideMenu';
import * as Style from './StyledHeader';
import {ThemeProvider} from 'react-jss';
import theme from './Theme';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidemenuVisible: false,
    };
    this.onToogleMenu = this.onToogleMenu.bind(this);
    this.onSearchBook = this.onSearchBook.bind(this);
  }

  // Show the side bar menu on click
  onToogleMenu() {
    const { sidemenuVisible } = this.state;
    this.setState({
      sidemenuVisible: !sidemenuVisible,
    });
  }

  onSearchBook(e) {
    const { history } = this.props;
    // When Key Enter is press and searchbar is not empty -> change the query
    if (e.key === 'Enter') {
      if (e.target.value) {
        e.preventDefault();
        history.push(`/books/all?search=${e.target.value}&page=1`);
      } else {
        e.preventDefault();
      }
    }
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { username } = this.props.user;
    const { sidemenuVisible } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Style.Header>
          <Style.NavBar onClick={this.onToogleMenu}><i className="fas fa-bars" /></Style.NavBar>
          <SideMenu
            visible={sidemenuVisible}
            closeMenu={this.onToogleMenu}
          />
          <Style.Logo src={logo} alt="jobsity-logo"></Style.Logo>
          <Style.Title>Bookshelf</Style.Title>
          <Style.Search name="search" type="text" size="40" placeholder="Search..." onKeyPress={this.onSearchBook}/>
          <Style.User src={userlogo} alt="User Logo">
            <Style.UserName>{username}</Style.UserName>
          </Style.User>
        </Style.Header>
      </ThemeProvider>
    );
  }
}

// Get the specific data from the store
const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

// Ask about how to do this without using mapStateToProps
// connect the container with data and actions
export default withRouter(connect(mapStateToProps)(Header));
