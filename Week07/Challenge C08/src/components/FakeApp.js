/* eslint-disable react/prop-types */
import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import '../styles/style.scss';
import AppContext from './AppContext';
import { withIndexContext } from './IndexContext';
import Header from './Header';
import RightBar from './RightBar';
import LeftBar from './LeftBar';
import FakeMainContent from './FakeMainContent';
import Notfound from './NotFound';
import handleResponse from '../helpers/handleResponse';


class FakeApp extends React.Component {
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
    };
    this.getData = this.getData.bind(this);
  }

  // Get requesto to the API to get all the books or filter ones by querystrings
  getData(params = {}, contentTitle, newHistory) {
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
          pagination: {
            page: data.page,
            pages: data.pages,
          },
          thehistory: newHistory,
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
    const { isLoggedIn, token } = this.props;
    console.log(`Logueado: ${isLoggedIn}`);
    console.log(`token: ${token}`);
    const {
      books,
      loading,
      error,
      title,
      message,
      pagination,
      thehistory,
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
        }}
      >
        <BrowserRouter>
          <div className="wrapper">
            <Header history={thehistory} />
            <RightBar />
            <LeftBar />
            <Switch>
              <Route path="/books/:location" component={FakeMainContent} exact />
              <Route path="/books/:id/esto" component={Notfound} />
            </Switch>
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}

export default withIndexContext(FakeApp);

/*
<Route path="/" exact render={() => (<Redirect to="/books/all?page=1" />)} />
            <Route path="/books/:location" component={MainContent} exact />
            <Route path="/login" component={Login} exact />
            <Route component={Notfound} />
*/
