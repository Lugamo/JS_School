/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as userActions from '../../redux/user/userActions';
import logo from '../../assets/images/jobsity.png';
import userlogo from '../../assets/images/user.png';
import SideMenu from '../SideBars/SideMenu';
import * as Style from './StyledHeader';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidemenuVisible: false,
      usermenuVisible: 'none',
    };

    this.onToogleMenu = this.onToogleMenu.bind(this);
    this.onSearchBook = this.onSearchBook.bind(this);
    this.onToogleUser = this.onToogleUser.bind(this);
  }

  // Show the side bar menu on click
  onToogleMenu() {
    const { sidemenuVisible } = this.state;
    this.setState({
      sidemenuVisible: !sidemenuVisible,
    });
  }

  onToogleUser() {
    const { usermenuVisible } = this.state;
    if (usermenuVisible === 'none') {
      this.setState({
        usermenuVisible: 'block',
      });
    } else {
      this.setState({
        usermenuVisible: 'none',
      });
    }
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
    const { sidemenuVisible, usermenuVisible } = this.state;
    const { logOut } = this.props;

    return (
      <Style.Header>
        <Style.NavBar onClick={this.onToogleMenu}><i className="fas fa-bars" /></Style.NavBar>
        <SideMenu
          visible={sidemenuVisible}
          closeMenu={this.onToogleMenu}
        />
        <Style.Logo src={logo} alt="jobsity-logo"></Style.Logo>
        <Style.Title>Bookshelf</Style.Title>
        <Style.Search name="search" type="text" size="40" placeholder="Search..." onKeyPress={this.onSearchBook} />
        <Style.User src={userlogo} alt="User Logo">
          <Style.UserName>{username}</Style.UserName>
          <i className="fas fa-caret-down" onClick={this.onToogleUser} />
          <Style.Dropdown display={usermenuVisible}>
            <p onClick={logOut}>Log out</p>
          </Style.Dropdown>
        </Style.User>
      </Style.Header>
    );
  }
}

// Get the specific data from the store
const mapStateToProps = state => ({
  user: state.user,
});

// get the actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

Header.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
  logOut: PropTypes.func,
};

// Ask about how to do this without using mapStateToProps
// connect the container with data and actions
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
