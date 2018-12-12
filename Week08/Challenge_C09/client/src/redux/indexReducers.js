import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userReducer from './user/userReducer';
import bookReducer from './book/bookReducer';
import loanReducer from './loan/loanReducer';

export default history => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  book: bookReducer,
  loan: loanReducer,
});
