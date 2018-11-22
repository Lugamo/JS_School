import '../../styles/header.scss';
import userlogo from '../../../assets/images/user.png';

const React = require('react');
// const ReactDOM = require('react-dom');

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
