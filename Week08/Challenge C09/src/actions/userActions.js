// When the user click the login button
function doLogin({ email, password }) {
  return dispatch => {
    dispatch({ type: 'LOGIN_REQUEST' });

    fetch('http://localhost:3001/token', {
      method: 'POST',
      body: `email=${email}&password=${password}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res => res.json())
      .then((response) => {
        if (response.token) {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
              username: response.user,
              token: response.token,
            }
          });
        } else {
          dispatch({
            type: 'LOGIN_FAILURE',
            payload: {},
            error: response.message.toString(),
          });
        }
      })
      .catch(error => {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: {},
          error: error.toString(),
        });
      });
  }
}

export {
  doLogin,
}
