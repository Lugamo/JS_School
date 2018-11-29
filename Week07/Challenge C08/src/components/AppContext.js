/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import handleResponse from '../helpers/handleResponse';

const AppContext = React.createContext(null);
const AppContextConsumer = AppContext.Consumer;

class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    this.state = {
      books: [],
      loading: false,
      message: '',
      error: '',
      title: 'All',
    };
    this.onfilterBooks = this.onfilterBooks.bind(this);
    this.getData = this.getData.bind(this);
  }

  // Get requesto to the API to get all the books or filter ones by querystrings
  getData(query) {
    this.setState({ loading: true });
    console.log(query);
    const url = `http://localhost:3000/books?city=${query}`;
    console.log(url);
    fetch(url)
      .then(response => handleResponse(response))
      .then((data) => {
        console.log(data.docs);
        this.setState({
          books: data.docs,
          message: data.message,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: error.message,
        });
      });
  }

  render() {
    const {
      books,
      loading,
      error,
      title,
      message,
    } = this.state;
    const { children } = this.props;
    return (
      <AppContext.Provider
        value={{
          books,
          loading,
          message,
          error,
          title,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export { AppContextProvider, AppContextConsumer };
