import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import {ThemeProvider} from 'react-jss';

import Header from '../Header/Header';
import RightBar from '../SideBars/RightBar';
import LeftBar from '../SideBars/LeftBar';
import MainContent from './MainContent/MainContent';
import BookDetail from './MainContent/BookDetail';
import * as Style from './StyledBookShelf';
import theme from '../Theme';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Style.Wrapper>
            <Header/>
            <RightBar />
            <LeftBar />
            <Switch>
              <Route path="/books/:location" component={MainContent} exact />
              <Route path="/books/detail/:bookid" component={BookDetail} exact />
            </Switch>
          </Style.Wrapper>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
