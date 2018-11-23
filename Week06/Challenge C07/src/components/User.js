import React from 'react';
import '../styles/header.scss';
import userlogo from '../../assets/images/user.png';

const User = () => {
  return (
    <div className="user">
      <div className="user-name">Eduardo Garcia</div>
      <i className="fas fa-caret-down" />
      <img className="profile-photo" src={userlogo} alt="User Logo" />
    </div>
  );
};

export default User;
