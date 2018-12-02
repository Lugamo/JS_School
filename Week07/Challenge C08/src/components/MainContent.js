import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class MainContent extends Component {
  componentDidMount() {
    this.handleLocation(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { location } = this.props;
    if (location !== nextProps.location) {
      this.handleLocation(nextProps);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  handleLocation({
    match,
    location,
    getData,
    history,
  }) {
    const value = capitalize(match.params.location);
    const search = queryString.parse(location.search);
    let endpoint = '/books?';
    if (value) {
      if (value === 'All') {
        if (Object.keys(search).length !== 0) {
          getData({
            q: (search.search || ''),
            page: (search.page || 1),
          }, endpoint, value, history);
        } else {
          getData({
            page: (search.page || 1),
          }, endpoint, value, history);
        }
      } else if (value === 'Digital') {
        getData({
          digital: true,
          page: (search.page || 1),
        }, endpoint, value, history);
      } else if (value === 'Me') {
        endpoint = '/me/books?';
        getData({
          page: (search.page || 1),
        }, endpoint, 'My Books', history);
      } else {
        getData({
          city: value,
          page: (search.page || 1),
        }, endpoint, value, history);
      }
    } else {
      getData({
        page: (search.page || 1),
      }, endpoint, value, history);
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

MainContent.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  books: PropTypes.arrayOf(PropTypes.any).isRequired,
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pagination: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withAppContext(MainContent);
