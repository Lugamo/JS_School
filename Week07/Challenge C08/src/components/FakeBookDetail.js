/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import queryString from 'query-string';
import { withAppContext } from './AppContext';
import '../styles/mainContent.scss';
import TopBarContent from './Topbarcontent';
import BottomBarContent from './BottomBarContent';
import List from './ListBook';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

class FakeMainContent extends Component {
  componentDidMount() {
    this.handleLocation(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.handleLocation(nextProps);
    }
  }

  handleLocation({
    match,
    location,
    getData,
    history,
  }) {
    const value = capitalize(match.params.location);
    const search = queryString.parse(location.search);
    if (value) {
      if (value === 'All') {
        if (Object.keys(search).length !== 0) {
          getData({
            q: (search.search || ''),
            page: (search.page || 1),
          }, value, history);
        } else {
          getData({
            page: (search.page || 1),
          }, value, history);
        }
      } else if (value === 'Digital') {
        getData({
          digital: true,
          page: (search.page || 1),
        }, value, history);
      } else {
        getData({
          city: value,
          page: (search.page || 1),
        }, value, history);
      }
    } else {
      getData({
        page: (search.page || 1),
      }, value, history);
    }
  }

  render() {
    const {
      books,
      loading,
      message,
      error,
      title,
      pagination,
      location,
    } = this.props;
    return (
      <main className="main-content">
        <TopBarContent title={title} />
        <List
          books={books}
          loading={loading}
          message={message}
          error={error}
        />
        <BottomBarContent pagination={pagination} location={location} />
      </main>
    );
  }
}

export default withAppContext(FakeMainContent);
