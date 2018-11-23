/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../styles/lateralBars.scss';

class MenuOptions extends React.Component {
  constructor(props) {
    super(props);
    this.Booksby = this.Booksby.bind(this);
  }

  Booksby(location, title) {
    return () => {
      const { filterBooks } = this.props;
      filterBooks(location, title);
    };
  }

  render() {
    return (
      <div>
        <div type="text" className="lb-tittle">MAIN</div>
        <ul className="fa-ul">
          <li onClick={this.Booksby('', 'All')}>
            <i className="fa-li fas fa-globe" />
            All
          </li>
          <li onClick={this.Booksby('?city=Quito', 'Quito')}>
            <i className="fa-li fas fa-globe" />
            Quito
          </li>
          <li onClick={this.Booksby('?city=Cartagena', 'Cartagena')}>
            <i className="fa-li fas fa-globe" />
            Cartagena
          </li>
          <li onClick={this.Booksby('?city=Medellin', 'Medellin')}>
            <i className="fa-li fas fa-globe" />
            Medellin
          </li>
          <li onClick={this.Booksby('?digital=true', 'Digital')}>
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
      </div>
    );
  }
}

export default MenuOptions;
