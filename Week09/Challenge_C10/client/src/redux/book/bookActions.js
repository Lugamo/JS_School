import { BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_FAILURE, UPDATE_BOOK } from './bookTypes';

function getDataBook(params = {}, endpoint, token) {
  return (dispatch) => {
    dispatch({ type: BOOKS_REQUEST });

    const query = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
    const url = `http://localhost:3001${endpoint}${query}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    }).then(res => res.json())
      .then((response) => {
        dispatch({
          type: BOOKS_SUCCESS,
          payload: {
            books: response.docs,
            message: response.message,
            pagination: {
              page: response.page,
              pages: response.pages,
            },
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: BOOKS_FAILURE,
          payload: {},
          error: error.message.toString(),
        });
      });
  };
}

function updateBook(bookID, data) {
  return ({
    type: UPDATE_BOOK,
    payload: {
      bookID,
      data,
    }
  })
}

export {
  getDataBook,
  updateBook,
}
