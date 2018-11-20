/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import './styles/style.scss';
import Header from './components/header/header';
import RightBar from './components/sidebars/rightbar';
import LeftBar from './components/sidebars/leftbar';
import MainContent from './components/maincontent/maincontent';

// import './side-menu';

const React = require('react');
const ReactDOM = require('react-dom');

// Request to get the data from ther server
/*
const ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:3000/books', true);
ourRequest.withCredentials = true;
ourRequest.onload = () => {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    const data = JSON.parse(ourRequest.responseText);
    console.log(data);
  } else {
    console.log('We connected to the server, but it returned an error.');
  }
};
ourRequest.onerror = () => {
  console.log('Connection error');
};
ourRequest.send();
*/
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <LeftBar />
      <MainContent />
      <RightBar />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
