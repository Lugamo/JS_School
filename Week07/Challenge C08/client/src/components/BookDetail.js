/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/tab.scss';
import '../styles/mainContent.scss';
import Stars from './Stars';
import loadgif from '../../assets/images/loading.gif';
import { withAppContext } from './AppContext';

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
    const { match, getData, thehistory } = this.props;
    getData({}, `/books/${match.params.bookid}`, '', thehistory);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  // onClick make a post request to server to loan a book
  handleLoan() {
    const { theToken, match } = this.props;
    const { startDate } = this.state;
    const url = `http://localhost:3000/books/${match.params.bookid}/user`;
    const data = `loanDate=${startDate.getTime()}`;
    fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${theToken}`,
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
    const { loading, books, message } = this.props;
    const {
      loanComplete,
      startDate,
      loanMessage,
      loanStatus,
    } = this.state;
    if (loading) {
      return (
        <div className="mainBooks">
          <img className="loading" src={loadgif} alt="Loading" />
        </div>
      );
    }
    // If the fetch is complete but response a empty array
    if (message !== 'OK') {
      return (
        <div className="mainBooks">
          <div className="notFound">{message}</div>
        </div>
      );
    }
    return (
      <main className="main-content">
        <h1 className="detailTitle">{books[0].title}</h1>
        <div className="detailImageSummary">
          <div className="imageBox">
            <img className="detailCover" src={books[0].image} alt="Book Cover" />
          </div>
          <div className="summaryBox">
            <p>{books[0].summary}</p>
            <p className="stars">
              {Stars(books[0].rating)}
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
                    <div className={loanStatus}>
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
                <div className={loanStatus}>
                  <p>No more available copies of this book</p>
                </div>,
              ]
            }
          </TabPanel>
        </Tabs>
      </main>
    );
  }
}

BookDetail.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  getData: PropTypes.func.isRequired,
  thehistory: PropTypes.objectOf(PropTypes.any).isRequired,
  theToken: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default withAppContext(BookDetail);
