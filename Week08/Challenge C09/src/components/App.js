import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Header from './Header';
import RightBar from './RightBar';
import LeftBar from './LeftBar';
import MainContent from './MainContent';
import BookDetail from './BookDetail';
import * as Style from './StyledApp';
import {ThemeProvider} from 'react-jss';
import theme from './Theme';


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
