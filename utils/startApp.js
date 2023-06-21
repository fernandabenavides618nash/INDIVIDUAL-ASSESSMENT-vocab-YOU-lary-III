import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { getVocabulary } from '../api/vocabularyData';
import vocabularyFormEvents from '../events/formEvents';
import { showVocabulary } from '../pages/vocabulary';
import navEvents from '../events/navEvents';
import logoutButton from '../components/buttons/logoutButton';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  vocabularyFormEvents(user);
  navBar();
  logoutButton();
  navEvents(user);
  getVocabulary(user.uid).then((vocabulary) => showVocabulary(vocabulary));
};

export default startApp;
