import React from 'react';
import '../styles/style.scss';
import Header from './Header';
import RightBar from './RightBar';
import LeftBar from './LeftBar';
import MainContent from './MainContent';
import handleResponse from '../helpers/handleResponse';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      loading: false,
      message: '',
      error: '',
      query: '',
      title: 'All',
    };
    this.onFilterBooks = this.onFilterBooks.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  // Change state of query, therefore, change the data that server response
  onFilterBooks(filter, contentTitle) {
    this.setState({
      query: filter,
      title: contentTitle,
    }, () => {
      this.getData();
    });
  }

  // Get requesto to the API to get all the books or filter ones by querystrings
  getData() {
    this.setState({ loading: true });
    const { query } = this.state;
    const url = `http://localhost:3000/books${query}`;
    fetch(url)
      .then(response => handleResponse(response))
      .then((data) => {
        this.setState({
          books: data.books,
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
    return (
      <div className="wrapper">
        <Header onFilterBooksApply={this.onFilterBooks} />
        <LeftBar onFilterBooksApply={this.onFilterBooks} />
        <MainContent
          books={books}
          loading={loading}
          title={title}
          error={error}
          message={message}
        />
        <RightBar />
      </div>
    );
  }
}

export default App;
