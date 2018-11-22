/* eslint-disable react/jsx-filename-extension */
import '../../styles/lateralBars.scss';

const React = require('react');
// const ReactDOM = require('react-dom');

const MenuOptions = () => {
  return (
    <div>
      <div type="text" className="lb-tittle">MAIN</div>
      <ul className="fa-ul">
        <li>
          <i className="fa-li fas fa-globe" />
          All
        </li>
        <li>
          <i className="fa-li fas fa-globe" />
          Quito
        </li>
        <li>
          <i className="fa-li fas fa-globe" />
          Cartagena
        </li>
        <li>
          <i className="fa-li fas fa-globe" />
          Medellin
        </li>
        <li>
          <i className="fa-li fas fa-tablet-alt" />
          Digital
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
      <div type="text" className="lb-tittle">YOUR BOOKS</div>
      <ul className="fa-ul">
        <li>
          <i className="fa-li fas fa-book-open" />
          Readings
        </li>
        <li>
          <i className="fa-li fas fa-history" />
          History
        </li>
        <li>
          <i className="fa-li fas fa-bookmark" />
          Read Later
        </li>
        <li>
          <i className="fa-li fas fa-heart" />
          Favorites
        </li>
      </ul>
    </div>
  );
};

export default MenuOptions;
