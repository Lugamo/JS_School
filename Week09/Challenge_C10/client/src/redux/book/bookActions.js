import { ajax } from 'rxjs/ajax';
import defaultUrl from '../../services/defaultURL';
import {
  BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_FAILURE, UPDATE_BOOK,
} from './bookTypes';

function getDataBook(params = {}, endpoint, token) {
  return (dispatch) => {
    dispatch({ type: BOOKS_REQUEST });

    const query = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
    const url = `${defaultUrl}${endpoint}${query}`;

    const request$ = ajax({
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    });

    request$.subscribe(
      (res) => {
        const { response } = res;
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
      },
      (error) => {
        const message = error.response ? error.response.message : 'Error';
        dispatch({
          type: BOOKS_FAILURE,
          payload: {
            message,
          },
          error: error.message.toString(),
        });
      },
    );
  };
}

function updateBook(bookID, data) {
  return ({
    type: UPDATE_BOOK,
    payload: {
      bookID,
      data,
    },
  });
}

export {
  getDataBook,
  updateBook,
};
