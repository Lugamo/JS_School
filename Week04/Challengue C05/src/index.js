import './styles/style.scss';
import './side-menu';


const booksTemplate = require('./booksTemplate.handlebars');
const text = require('./books.json');

function createBookTemplate(jsondata) {
  const bookContainer = document.getElementById('booksContainer');
  bookContainer.innerHTML = booksTemplate(jsondata);
}
createBookTemplate(text);
