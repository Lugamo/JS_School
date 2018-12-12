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
}

export default (state = initialState, action) => {
  switch (action.type) {
		case 'BOOK_REQUEST':
			return {
				...state,
				loading: true,
				error: null
      };
    case 'BOOK_SUCCESS':
      return {
        ...state,
        loading: false,
        books: action.payload.books,
        message: action.payload.message,
        pagination: {
          page: action.payload.pagination.page,
          pages: action.payload.pagination.pages,
        },
        error: null
      };
    case 'BOOK_FAILURE':
    return {
      ...state,
      loading: false,
      error: action.error
    };
		default:
			return state;
	}
}