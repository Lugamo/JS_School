import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import { store } from './redux/store';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import theme from './components/Theme';
import initWebsocket from './services/websocket';
import getSession from './services/sessionStorage';

initWebsocket(store);
getSession(store);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
