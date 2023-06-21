import firebase from 'firebase/app';
import clearDom from './clearDom';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
  clearDom();
};

export { signIn, signOut };
