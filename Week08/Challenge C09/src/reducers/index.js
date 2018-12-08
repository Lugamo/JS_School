import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import userReducer from './userReducer';
import bookReducer from './bookReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  book: bookReducer,
})