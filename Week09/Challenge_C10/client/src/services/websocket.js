import socketIOClient from 'socket.io-client';
import defaultUrl from './defaultURL';
import { updateBook } from '../redux/book/bookActions';

function initWebSocket(store) {
  // Listening if any book change
  const socket = socketIOClient(defaultUrl);
  socket.on('reservation_done', (book) => {
    store.dispatch(updateBook(book.id, book));
  });
}

export default initWebSocket;
