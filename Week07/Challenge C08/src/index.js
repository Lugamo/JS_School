import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import App from './components/App';
import Notfound from './components/NotFound';
import Login from './components/Login';
import IndexContext from './components/IndexContext';
import ProtectedRoute from './components/ProtectedRoute';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      isLoggedIn: false,
      token: null,
      user: null,
    };
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(tok, username) {
    this.setState({
      isLoggedIn: true,
      token: tok,
      user: username,
    });
  }

  render() {
    const {
      email,
      password,
      isLoggedIn,
      token,
      user,
    } = this.state;
    // Using Context to pass the user data between login and books routes
    return (
      <IndexContext.Provider
        value={{
          email,
          password,
          isLoggedIn,
          token,
          user,
          updateUser: this.updateUser,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => (<Redirect to="/books/all?page=1" />)} />
            <ProtectedRoute
              path="/books/:location"
              loggedIn={isLoggedIn}
              component={App}
              exact
            />
            <ProtectedRoute
              path="/books/detail/:bookid"
              loggedIn={isLoggedIn}
              component={App}
              exact
            />
            <Route path="/login" component={Login} exact />
            <Route component={Notfound} />
          </Switch>
        </BrowserRouter>
      </IndexContext.Provider>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root'),
);
