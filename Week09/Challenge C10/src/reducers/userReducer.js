const initialState = {
  username: null,
	token: null,
	isLoggingIn: false,
	error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
		case 'LOGIN_REQUEST':
			return {
				...state,
				isLoggingIn: true,
				error: null
			};
    case 'LOGIN_SUCCESS':
			return {
				...state,
				isLoggingIn: false,
				username: action.payload.username,
				token: action.payload.token,
			};
		case 'LOGIN_FAILURE':
			return {
				...state,
				isLoggingIn: false,
				error: action.error,
			};
		default:
			return state;
	}
}