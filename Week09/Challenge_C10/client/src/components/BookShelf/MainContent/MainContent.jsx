import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';
import * as bookActions from '../../../redux/book/bookActions';
import BottomBarContent from './BottomBarContent';
import List from './ListBook';
import * as Style from './StyledMainContent';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
    };
    this.handleLocation = this.handleLocation.bind(this);
  }

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
    getDataBook,
  }) {
    const value = capitalize(match.params.location);
    const { token } = this.props.user;
    const search = queryString.parse(location.search);
    let endpoint = '/books?';
    if (value) {
      if (value === 'All') {
        if (Object.keys(search).length !== 0) {
          getDataBook({
            q: (search.search || ''),
            page: (search.page || 1),
          }, endpoint, token);
        } else {
          getDataBook({
            page: (search.page || 1),
          }, endpoint, token);
        }
      } else if (value === 'Digital') {
        getDataBook({
          digital: true,
          page: (search.page || 1),
        }, endpoint, token);
      } else if (value === 'Me') {
        endpoint = '/me/books?';
        getDataBook({
          page: (search.page || 1),
        }, endpoint, token);
      } else {
        getDataBook({
          city: value,
          page: (search.page || 1),
        }, endpoint, token);
      }
    } else {
      // Do Nothing
    }
    this.setState({
      title: value,
    });
  }

  render() {
    const {
      books,
      loading,
      message,
      error,
      pagination,
    } = this.props.book;
    const { title } = this.state;
    const { location } = this.props;

    return (
      <Style.MainContent>
        <Style.MainContentTop>
          <Style.MainTopTitle>{title}</Style.MainTopTitle>
          <Style.MainTopOrder>
            <span>Release date</span>
            <span>&ensp;|&ensp;</span>
            <span>Popularity</span>
          </Style.MainTopOrder>
          <Style.MainTopDisplay>
            <i className="fa fa-list-ul display-btn" />
            <i className="fa fa-th-large display-btn" />
          </Style.MainTopDisplay>
        </Style.MainContentTop>
        <Style.MainBooks>
          <List
            books={books}
            loading={loading}
            message={message}
            error={error}
          />
        </Style.MainBooks>
        <BottomBarContent pagination={pagination} location={location} />
      </Style.MainContent>
    );
  }
}

MainContent.propTypes = {
  book: PropTypes.objectOf(PropTypes.any),
  user: PropTypes.objectOf(PropTypes.any),
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  books: PropTypes.arrayOf(PropTypes.any),
  loading: PropTypes.bool,
  message: PropTypes.string,
  error: PropTypes.string,
  pagination: PropTypes.objectOf(PropTypes.any),
};

// Get the specific data from the store
const mapStateToProps = state => ({
  user: state.user,
  book: state.book,
});

// get the actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators(bookActions, dispatch);
}

// connect the container with data and actions
export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
