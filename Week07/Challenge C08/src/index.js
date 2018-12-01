import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import FakeApp from './components/FakeApp';
import Notfound from './components/NotFound';
import Login from './components/Login';
import IndexContext from './components/IndexContext';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      isLoggedIn: false,
      token: null,
    };
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(tok) {
    this.setState({
      isLoggedIn: true,
      token: tok,
    });
  }

  render() {
    const {
      email,
      password,
      isLoggedIn,
      token,
    } = this.state;
    return (
      <IndexContext.Provider
        value={{
          email,
          password,
          isLoggedIn,
          token,
          updateUser: this.updateUser,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => (<Redirect to="/books/all?page=1" />)} />
            <Route path="/books/:location" component={FakeApp} exact />
            <Route path="/login" component={Login} exact />
            <Route component={Notfound} />
          </Switch>
        </BrowserRouter>
      </IndexContext.Provider>
    );
  }
  // Redirect "/" to main page or Notfound component for strange urls
}

ReactDOM.render(
  <Index />,
  document.getElementById('root'),
);
