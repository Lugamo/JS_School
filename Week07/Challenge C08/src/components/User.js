import React from 'react';
import PropTypes from 'prop-types';
import '../styles/header.scss';
import userlogo from '../../assets/images/user.png';

const User = ({ user }) => (
  <div className="user">
    <div className="user-name">{user}</div>
    <i className="fas fa-caret-down" />
    <img className="profile-photo" src={userlogo} alt="User Logo" />
  </div>
);

User.propTypes = {
  user: PropTypes.string.isRequired,
};

export default User;
