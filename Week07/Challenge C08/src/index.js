import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import App from './components/App';
import Notfound from './components/NotFound';
import Login from './components/Login';

const Index = () => (
  // Redirect "/" to main page or Notfound component for strange urls
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => (<Redirect to="/books/all?page=1" />)} />
      <Route path="/books/:location" component={App} exact />
      <Route path="/login" component={Login} exact />
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <Index />,
  document.getElementById('root'),
);
