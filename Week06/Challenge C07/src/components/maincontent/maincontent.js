import '../../styles/mainContent.scss';
import TopBarContent from './topbarcontent';
import List from './listbook';

const React = require('react');


const MainContent = () => {
  return (
    <main className="main-content">
      <TopBarContent />
      <List />
    </main>
  );
};

export default MainContent;
