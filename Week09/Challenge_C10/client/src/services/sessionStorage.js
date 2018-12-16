import { setDataFromStorage } from '../redux/user/userActions';

function getSession(store) {
  const checkStorage = JSON.parse(sessionStorage.getItem('userdata'));

  // Check if theres any local storage
  if (checkStorage) {
    const { username, token } = checkStorage;
    store.dispatch(setDataFromStorage(username, token));
  }
}

export default getSession;
