import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import BookShelf from './BookShelf/BookShelf';
import Notfound from './NotFound/NotFound';
import Login from './Login/Login';
import ProtectedRoute from './ProtectedRoute';


class App extends React.Component {
  render() {
    // If the user is Null -> redirect.
    const { token } = this.props.user;
    return (
      
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => (<Redirect to="/books/all?page=1" />)} />
          <ProtectedRoute
            path="/books/:location"
            loggedIn={token}
            component={BookShelf}
            exact
          />
          <ProtectedRoute
            path="/books/detail/:bookid"
            loggedIn={token}
            component={BookShelf}
            exact
          />
          <Route path="/login" component={Login} exact />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
