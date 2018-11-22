import React from 'react';
import { handleResponse } from '../helpers/handleResponse';
import '../../styles/mainContent.scss';
import BookTooltip from './booktooltip';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      books: [],
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch('http://localhost:3000/books')
      .then(handleResponse)
      .then((data) => {
        this.setState({
          books: data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.errorMessage,
          loading: false,
        });
      });
  }

  renderList() {
    const { books } = this.state;
    let i = 0;
    return books.map((book) => {
      i += 1;
      return (
        <BookTooltip props={book} key={i} />
      );
    });
  }

  render() {
    const { loading, error } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error}</div>;
    }
    return (
      <div className="mainBooks">
        {this.renderList()}
      </div>
    );
  }
}

export default List;
