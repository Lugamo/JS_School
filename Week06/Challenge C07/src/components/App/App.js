import '../../styles/style.scss';
import Header from '../Header';
import RightBar from '../Rightbar';
import LeftBar from '../Leftbar';
import MainContent from '../Maincontent';
import handleResponse from '../../helpers/handleResponse';

const React = require('react');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      loading: false,
      error: '',
      query: '',
      title: 'All',
    };
    this.filterBooks = this.filterBooks.bind(this);
    this.setTitleOfContent = this.setTitleOfContent.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getData();
  }

  setTitleOfContent(contentTitle) {
    this.setState({
      title: contentTitle,
    });
  }

  getData() {
    const { query } = this.state;
    const url = `http://localhost:3000/books${query}`;
    fetch(url)
      .then(response => handleResponse(response))
      .then((data) => {
        this.setState({
          books: data,
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

  filterBooks(filter, contentTitle) {
    this.setState({
      query: filter,
      title: contentTitle,
    }, () => {
      this.getData();
    });
  }

  render() {
    const {
      books,
      loading,
      error,
      title,
    } = this.state;
    // console.log(error);
    return (
      <div className="wrapper">
        <Header filterBooks={this.filterBooks} />
        <LeftBar filterBooks={this.filterBooks} />
        <MainContent books={books} loading={loading} title={title} error={error} />
        <RightBar />
      </div>
    );
  }
}

export default App;
