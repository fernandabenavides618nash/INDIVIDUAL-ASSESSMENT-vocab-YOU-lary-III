import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/buttons/loginButton';
import logoutButton from '../components/buttons/logoutButton';
import client from './client';
import startApp from './startApp';
// import clearDom from './clearDom';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
      logoutButton(user);
    } else {
      // person is NOT logged in
      loginButton();
      // clearDom();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
