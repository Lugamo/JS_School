import { LOAN_REQUEST, LOAN_SUCCESS, LOAN_FAILURE } from './loanTypes';

const initialState = {
  loanMessage: 'default',
  loanStatus: 'BAD',
  transactionDate: null,
  loanLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAN_REQUEST:
      return {
        ...state,
        loanLoading: true,
        error: null,
      };
    case LOAN_SUCCESS:
      return {
        ...state,
        loanMessage: action.payload.loanMessage,
        loanStatus: action.payload.loanStatus,
        transactionDate: action.payload.transactionDate,
        loanLoading: false,
        error: null,
      };
    case LOAN_FAILURE:
      return {
        ...state,
        loanLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
