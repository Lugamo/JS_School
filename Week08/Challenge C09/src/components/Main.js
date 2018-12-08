import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import App from './App';
import Notfound from './NotFound';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';


class Main extends React.Component {
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
            component={App}
            exact
          />
          <ProtectedRoute
            path="/books/detail/:bookid"
            loggedIn={token}
            component={App}
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

export default connect(mapStateToProps)(Main);
