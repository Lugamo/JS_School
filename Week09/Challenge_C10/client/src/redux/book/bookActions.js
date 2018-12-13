import { BOOK_REQUEST, BOOK_SUCCESS, BOOK_FAILURE, BOOK_UPDATE} from './bookTypes';

function getDataBook(params = {}, endpoint, token) {
  return (dispatch) => {
    dispatch({ type: BOOK_REQUEST });

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
          type: BOOK_SUCCESS,
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
          type: BOOK_FAILURE,
          payload: {},
          error: error.message.toString(),
        });
      });
  };
}

function updateLoanedBook(allBooks, loanBook) {
  return (dispatch) => {
    for (let i = 0; i < allBooks.length; i += 1) {
      if (allBooks[i].id === loanBook.id) {
        allBooks[i].borrowed = loanBook.borrowed;
        break;
      }
    }
    dispatch({
      type: BOOK_UPDATE,
      payload: {
        books: allBooks,
      },
    });
  }
}

export {
  getDataBook,
  updateLoanedBook,
}
