/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as userActions from '../redux/user/userActions';
import BookShelf from './BookShelf/BookShelf';
import Notfound from './NotFound/NotFound';
import Login from './Login/Login';
import ProtectedRoute from './ProtectedRoute';

class App extends React.Component {
  render() {
    const checkStorage = JSON.parse(sessionStorage.getItem('userdata'));
    let { token } = this.props.user;

    // Check if theres any local storage
    if (checkStorage && !token) {
      const { setDataFromStorage } = this.props;
      setDataFromStorage(checkStorage.username, checkStorage.token);
    }
    // If the user is Null -> redirect.
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

const mapStateToProps = state => ({
  user: state.user,
});

// get the actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

App.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  token: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
