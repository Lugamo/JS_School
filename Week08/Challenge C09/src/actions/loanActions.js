function doLoan(bookID, loanDate, token){

  return dispatch => {
    dispatch({ type: 'LOAN_REQUEST'});

    const url = `http://localhost:3001/books/${bookID}/user`;
    const data = `loanDate=${loanDate.getTime()}`;
    fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    }).then(res => res.json())
      .then((response) => {
        dispatch({
          type: 'LOAN_SUCCESS',
          payload: {
            loanMessage: response.message,
            loanStatus: response.status,
            transactionDate: response.transactionDate
          },
        });
      })
      .catch(error => {
        dispatch({
          type: 'LOAN_FAILURE',
          payload: {},
          error: error.message.toString(),
        });
      });
  }
}

export {
  doLoan,
}
