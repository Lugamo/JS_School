import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import App from './components/App/App';
import Notfound from './components/NotFound';

const Index = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => (<Redirect to="/books" />)} />
        <Route path="/books" component={App} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Index />,
  document.getElementById('root'),
);
