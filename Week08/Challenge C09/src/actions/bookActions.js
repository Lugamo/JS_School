function getDataBook( params = {}, endpoint, token ) {
  return dispatch => {
    dispatch({ type: 'BOOK_REQUEST'});

    const query = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
    const url = `http://localhost:3001${endpoint}${query}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    }).then(res => res.json())
      .then(response => {
        dispatch({
          type: 'BOOK_SUCCESS',
          payload: {
            books: response.docs,
            message: response.message,
            pagination: {
              page: response.page,
              pages: response.pages,
            },
          }
        });
      })
      .catch(error => {
        dispatch({
          type: 'BOOK_FAILURE',
          payload: {},
          error: error.message.toString(),
        });
      });
  }
}

export {
  getDataBook,
}