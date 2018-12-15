import { ajax } from 'rxjs/ajax';
import { LOAN_REQUEST, LOAN_SUCCESS, LOAN_FAILURE } from './loanTypes';
import defaultUrl from '../../services/defaultURL';

function doLoan(bookID, loanDate, token) {
  return (dispatch) => {
    dispatch({ type: LOAN_REQUEST });

    const url = `${defaultUrl}/books/${bookID}/user`;
    const data = `loanDate=${loanDate.getTime()}`;

    const request$ = ajax({
      url,
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    });

    request$.subscribe(
      (res) => {
        const { response } = res;
        dispatch({
          type: LOAN_SUCCESS,
          payload: {
            loanMessage: response.message,
            loanStatus: response.status,
            transactionDate: response.transactionDate,
          },
        });
      },
      (error) => {
        dispatch({
          type: LOAN_FAILURE,
          payload: {},
          error: error.message.toString(),
        });
      },
    );
  };
}

export {
  doLoan,
};
