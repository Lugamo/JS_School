import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import Main from './components/Main';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
