/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/bookActions';
import { withRouter } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Stars from './Stars';
import loadgif from '../assets/images/loading.gif';
import * as Style from './StyledMainContent';
import {ThemeProvider} from 'react-jss';
import theme from './Theme';

function addDays(today, plusDays) {
  today.setDate(today.getDate() + plusDays);
  return today;
}

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      loanComplete: false,
      loanMessage: 'default',
      loanStatus: 'BAD',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLoan = this.handleLoan.bind(this);
  }

  // After Mount call the function to change the state
  componentDidMount() {
    const { match, history, getDataBook } = this.props;
    getDataBook({}, `/books/${match.params.bookid}`, '', history);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  // onClick make a post request to server to loan a book
  handleLoan() {
    const { match } = this.props;
    const { token } = this.props.user;
    const { startDate } = this.state;
    const url = `http://localhost:3001/books/${match.params.bookid}/user`;
    const data = `loanDate=${startDate.getTime()}`;
    fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        this.setState({
          loanStatus: response.status,
          loanMessage: response.message,
          loanComplete: true,
        });
      });
  }

  render() {
    const { loading, books, message } = this.props.book;
    const {
      loanComplete,
      startDate,
      loanMessage,
      loanStatus,
    } = this.state;
    if (loading) {
      return (
        <ThemeProvider theme={theme}>
          <Style.MainBooks>
            <img className="loading" src={loadgif} alt="Loading" />
          </Style.MainBooks>
        </ThemeProvider>
      );
    }
    // If the fetch is complete but response a empty array
    if (message !== 'OK') {
      return (
        <ThemeProvider theme={theme}>
          <Style.MainBooks>
            <div className="notFound">{message}</div>
          </Style.MainBooks>
        </ThemeProvider>
      );
    }
    return (
      <ThemeProvider theme={theme}>
        <Style.MainContent>
          <Style.DetailBook>
          <h1 className="detailTitle">{books[0].title}</h1>
          <div className="detailImageSummary">
            <div className="imageBox">
              <img className="detailCover" src={books[0].image} alt="Book Cover" />
            </div>
            <div className="summaryBox">
              <p>{books[0].summary}</p>
              <p className="stars">
                {Stars(books[0].rating, books[0].id, 'BDe')}
              </p>
            </div>
          </div>
        <Tabs>
          <TabList>
            <Tab>Data Sheet</Tab>
            <Tab>Book Loan</Tab>
          </TabList>

          <TabPanel>
            <ul>
              <li>
                <span className="field">Type:</span>
                {books[0].digital ? ' Digital' : ' Printed'}
              </li>
              <li>
                <span className="field">Author(s):</span>
                {books[0].author.map(author => (
                  <span key={`${books[0].id}-${author}`}>
                    {author}
                  </span>
                ))}
              </li>
              <li>
                <span className="field">ISBN-13:</span>
                {books[0].isbn}
              </li>
              <li>
                <span className="field">Pages:</span>
                {books[0].pages}
              </li>
              <li>
                <span className="field">Year:</span>
                {books[0].year}
              </li>
              <li className="field">
                <span className="field">Language:</span>
                {books[0].language.toUpperCase()}
              </li>
            </ul>
          </TabPanel>
          <TabPanel>
            {books[0].quantity > books[0].borrowed || books[0].digital
              ? [
                (loanComplete
                  ? (
                    <div className={loanStatus} key={`${books[0].id}-loanStatusCom`}>
                      <p>{loanMessage}</p>
                    </div>
                  ) : (
                    <div className="picker" key={`${books[0].id}-picker`}>
                      <p>Please select the day to return the book:</p>
                      <DatePicker
                        inline
                        selected={startDate}
                        onChange={this.handleChange}
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 15)}
                      />
                      <br />
                      <button type="button" onClick={this.handleLoan}>Borrow Book</button>
                    </div>
                  )
                ),
              ] : [
                <div className={loanStatus} key={`${books[0].id}-loanStatusNoCo`}>
                  <p>No more available copies of this book</p>
                </div>,
              ]
            }
          </TabPanel>
        </Tabs>
          </Style.DetailBook>
        </Style.MainContent>
      </ThemeProvider>
    );
  }
}

BookDetail.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loading: PropTypes.bool,
  message: PropTypes.string,
  books: PropTypes.arrayOf(PropTypes.any),
};

// Get the specific data from the store
const mapStateToProps = state => {
  return {
    user: state.user,
    book: state.book,
  };
};

// get the actions 
function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

// Ask about how to do this without using mapStateToProps
// connect the container with data and actions
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookDetail));
