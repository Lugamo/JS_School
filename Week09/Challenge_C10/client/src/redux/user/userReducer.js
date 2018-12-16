import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT,
} from './userTypes';

const initialState = {
  username: null,
  token: null,
  isLoggingIn: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      sessionStorage.setItem('userdata', JSON.stringify({ token: action.payload.token, username: action.payload.username }));
      return {
        ...state,
        isLoggingIn: false,
        username: action.payload.username,
        token: action.payload.token,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.error,
      };
    case LOG_OUT:
      sessionStorage.clear('userdata');
      return {
        ...state,
        username: null,
        token: null,
      };
    default:
      return state;
  }
};
