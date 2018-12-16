import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './indexReducers';

const history = createBrowserHistory();
const initialState = {};

const store = createStore(
  rootReducer(history), // root reducer with router state
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
  ),
);

export {
  store,
  history,
};
