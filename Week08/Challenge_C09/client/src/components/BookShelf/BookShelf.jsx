import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Header from '../Header/Header';
import RightBar from '../SideBars/RightBar';
import LeftBar from '../SideBars/LeftBar';
import MainContent from './MainContent/MainContent';
import BookDetail from './MainContent/BookDetail';
import * as Style from './StyledBookShelf';

class BookShelf extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Style.Wrapper>
          <Header />
          <RightBar />
          <LeftBar />
          <Switch>
            <Route path="/books/:location" component={MainContent} exact />
            <Route path="/books/detail/:bookid" component={BookDetail} exact />
          </Switch>
        </Style.Wrapper>
      </BrowserRouter>
    );
  }
}

export default BookShelf;
