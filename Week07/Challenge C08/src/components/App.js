import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import '../styles/style.scss';
import Header from './Header';
import RightBar from './RightBar';
import LeftBar from './LeftBar';
import MainContent from './MainContent';
import handleResponse from '../helpers/handleResponse';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: false,
      message: '',
      error: '',
      title: 'All',
      page: 1,
      pages: 1,
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const { match, location } = this.props;
    const value = capitalize(match.params.location);
    const search = queryString.parse(location.search);
    if (value) {
      if (value === 'All') {
        if (Object.keys(search).length !== 0) {
          this.getData({
            q: (search.search || ''),
            page: (search.page || 1),
          }, value);
        } else {
          this.getData({
            page: (search.page || 1),
          }, value);
        }
      } else if (value === 'Digital') {
        this.getData({
          digital: true,
          page: (search.page || 1),
        }, value);
      } else {
        this.getData({
          city: value,
          page: (search.page || 1),
        }, value);
      }
    } else {
      this.getData({
        page: (search.page || 1),
      }, value);
    }
  }

  componentDidUpdate(prevProps) {
    const { match, location } = this.props;
    if (match !== prevProps.match || location !== prevProps.location) {
      const value = capitalize(match.params.location);
      const search = queryString.parse(location.search);
      if (value === 'All') {
        if (Object.keys(search).length !== 0) {
          this.getData({
            q: (search.search || ''),
            page: (search.page || 1),
          }, value);
        } else {
          this.getData({}, value);
        }
      } else if (value === 'Digital') {
        this.getData({
          digital: true,
          page: (search.page || 1),
        }, value);
      } else {
        this.getData({
          city: value,
          page: (search.page || 1),
        }, value);
      }
    }
  }

  // Get requesto to the API to get all the books or filter ones by querystrings
  getData(params = {}, contentTitle) {
    this.setState({ loading: true });
    const query = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
    const url = `http://localhost:3000/books?${query}`;
    fetch(url)
      .then(response => handleResponse(response))
      .then((data) => {
        this.setState({
          books: data.docs,
          message: data.message,
          loading: false,
          title: contentTitle,
          page: data.page,
          pages: data.pages,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: error.message,
        });
      });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { history, location } = this.props;
    const {
      books,
      loading,
      error,
      title,
      message,
      page,
      pages,
    } = this.state;
    return (
      <div className="wrapper">
        <Header history={history} />
        <LeftBar />
        <MainContent
          books={books}
          loading={loading}
          title={title}
          error={error}
          message={message}
          page={page}
          pages={pages}
          location={location}
        />
        <RightBar />
      </div>
    );
  }
}

App.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default App;
