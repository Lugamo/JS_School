import React from 'react';
import '../../styles/style.scss';
import Header from '../Header';
import RightBar from '../Rightbar';
import LeftBar from '../Leftbar';
import MainContent from '../Maincontent';
import handleResponse from '../../helpers/handleResponse';

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
    this.onfilterBooks = this.onfilterBooks.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  onfilterBooks(filter, contentTitle) {
    this.setState({
      query: filter,
      title: contentTitle,
    }, () => {
      this.getData();
    });
  }

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
        <Header onfilterBooksApply={this.onfilterBooks} />
        <LeftBar onfilterBooksApply={this.onfilterBooks} />
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
