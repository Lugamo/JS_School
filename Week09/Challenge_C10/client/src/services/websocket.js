import socketIOClient from 'socket.io-client';
import { updateBook } from '../redux/book/bookActions';

function initWebSocket(store) {
  // Listening if any book change
  const socket = socketIOClient('http://localhost:3001');
  socket.on('reservation_done', (book) => {
    console.log(book);
    store.dispatch(updateBook(book.id, book));
  });
}

export default initWebSocket;