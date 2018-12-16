import { ajax } from 'rxjs/ajax';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT,
} from './userTypes';
import defaultUrl from '../../services/defaultURL';

// When the user click the login button
function doLogin({ email, password }) {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    const request$ = ajax({
      url: `${defaultUrl}/token`,
      method: 'POST',
      body: `email=${email}&password=${password}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    request$.subscribe(
      (res) => {
        const { response } = res;
        if (response.token) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              username: response.user,
              token: response.token,
            },
          });
        } else {
          dispatch({
            type: LOGIN_FAILURE,
            payload: {},
            error: response.message.toString(),
          });
        }
      },
      (error) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: {},
          error: error.toString(),
        });
      },
    );
  };
}

function setDataFromStorage(username, token) {
  return ({
    type: LOGIN_SUCCESS,
    payload: {
      username,
      token,
    },
  });
}

function logOut() {
  return ({
    type: LOG_OUT,
    payload: {},
  });
}

export {
  doLogin,
  setDataFromStorage,
  logOut,
};
