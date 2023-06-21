import { signOut } from '../utils/auth';
import {
  getVocabulary, filterHtmlVocabulary, filterCssVocabulary, filterJsVocabulary
} from '../api/vocabularyData';
import { showVocabulary } from '../pages/vocabulary';

const navEvents = (user) => {
  document.querySelector('#logoutBtn').addEventListener('click', signOut); // SIGN-OUT
  document.querySelector('#allVocabulary').addEventListener('click', () => {
    getVocabulary(user.uid).then(showVocabulary); // ALL VOCABULARY
  });
  document.querySelector('#filterHtml').addEventListener('clicl', () => {
    filterHtmlVocabulary(user.uid).then(showVocabulary); // HTML VOCABULARY
  });
  document.querySelector('#filterCss').addEventListener('clicl', () => {
    filterCssVocabulary(user.uid).then(showVocabulary); // CSS VOCABULARY
  });
  document.querySelector('#filterJavaScript').addEventListener('clicl', () => {
    filterJsVocabulary(user.uid).then(showVocabulary); // JAVASCRIPT VOCABULARY
  });
};

export default navEvents;
