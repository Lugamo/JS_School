import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './userTypes';

// When the user click the login button
function doLogin({ email, password }) {
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST });

    fetch('http://localhost:3001/token', {
      method: 'POST',
      body: `email=${email}&password=${password}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res => res.json())
      .then((response) => {
        if (response.token) {
          sessionStorage.setItem('userdata', JSON.stringify({ token: response.token, username: response.user }));
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              username: response.user,
              token: response.token,
            }
          });
        } else {
          dispatch({
            type: LOGIN_FAILURE,
            payload: {},
            error: response.message.toString(),
          });
        }
      })
      .catch(error => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: {},
          error: error.toString(),
        });
      });
  }
}

function setDataFromStorage(username, token) {
  return dispatch => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        username,
        token,
      }
    });
  }
}

export {
  doLogin,
  setDataFromStorage,
}
