/* eslint-disable no-console */
import './styles/style.scss';
import './side-menu';

// fot he handlebars templates
const booksTemplate = require('./booksTemplate.handlebars');

// To create the template to inner in the hatml
function createBookTemplate(jsondata) {
  const bookContainer = document.getElementById('booksContainer');
  bookContainer.innerHTML = booksTemplate(jsondata);
}

// PATCH request to the JSON file (book.json)
function makePatch(bookid, lendbool, userid) {
  const updateData = { lend: { bool: lendbool, user: userid } };
  const jsonUpdate = JSON.stringify(updateData);

  const update = new XMLHttpRequest();
  update.open('PATCH', (`http://localhost:3000/books/${bookid}`), true);
  update.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  update.send(jsonUpdate);
  window.location.reload();
}

// Request to get the data from ther server (Json-server from local file books.json)
const ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:3000/books');
ourRequest.onload = () => {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    const data = JSON.parse(ourRequest.responseText);
    createBookTemplate(data);
  } else {
    console.log('We connected to the server, but it returned an error.');
  }
};
ourRequest.onerror = () => {
  console.log('Connection error');
};
ourRequest.send();

// When Lend button click change the json file and reload the page to show the changes
document.getElementById('booksContainer').addEventListener('click', (event) => {
  // e.target was the clicked element
  const btnid = (event.target.id);

  if (event.target.className === 'btn-lend') {
    makePatch(btnid, true, 'user001');
  } else if (event.target.className === 'btn-dont-lend') {
    makePatch(btnid, false, '');
  }
});
