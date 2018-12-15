/* eslint-disable no-param-reassign */
import {
  BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_FAILURE, UPDATE_BOOK,
} from './bookTypes';

const initialState = {
  books: [],
  loading: false,
  message: null,
  error: null,
  title: 'All',
  pagination: {
    page: 1,
    pages: 1,
  },
  singleBook: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload.books,
        singleBook: action.payload.singleBook,
        message: action.payload.message,
        pagination: {
          page: action.payload.pagination.page,
          pages: action.payload.pagination.pages,
        },
        error: null,
      };
    case BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        error: action.error,
      };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id === action.payload.bookID) {
            delete action.payload.data.id;
            return {
              ...book,
              ...action.payload.data,
            };
          }

          return book;
        }),
      };
    default:
      return state;
  }
};
