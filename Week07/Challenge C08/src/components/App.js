import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/style.scss';
import AppContext from './AppContext';
import { withIndexContext } from './IndexContext';
import Header from './Header';
import RightBar from './RightBar';
import LeftBar from './LeftBar';
import MainContent from './MainContent';
import BookDetail from './BookDetail';
import handleResponse from '../helpers/handleResponse';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: false,
      message: '',
      error: '',
      title: 'All',
      pagination: {
        page: 1,
        pages: 1,
      },
      thehistory: null,
      theToken: null,
    };
    this.getData = this.getData.bind(this);
  }

  // Get requesto to the API to get all the books or filter ones by querystrings
  getData(params = {}, endpoint, contentTitle, newHistory) {
    const { token } = this.props;
    this.setState({ loading: true });
    const query = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
    const url = `http://localhost:3000${endpoint}${query}`;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => handleResponse(response))
      .then((data) => {
        this.setState({
          books: data.docs,
          message: data.message,
          loading: false,
          title: contentTitle,
          pagination: {
            page: data.page,
            pages: data.pages,
          },
          thehistory: newHistory,
          theToken: token,
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
    const { user } = this.props;
    const {
      books,
      loading,
      error,
      title,
      message,
      pagination,
      thehistory,
      theToken,
    } = this.state;
    return (

      <AppContext.Provider
        value={{
          books,
          loading,
          error,
          title,
          message,
          pagination,
          getData: this.getData,
          thehistory,
          user,
          theToken,
        }}
      >
        <BrowserRouter>
          <div className="wrapper">
            <Header history={thehistory} user={user} />
            <RightBar />
            <LeftBar />
            <Switch>
              <Route path="/books/:location" component={MainContent} exact />
              <Route path="/books/detail/:bookid" component={BookDetail} exact />
            </Switch>
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  token: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default withIndexContext(App);
