import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/buttons/logoutButton';
import domEvents from '../events/domEvents';
import { getVocabulary } from '../api/vocabularyData';
import { showVocabulary } from '../pages/vocabulary';
import vocabularyFormEvents from '../events/formEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  vocabularyFormEvents(user);
  navBar();
  navEvents(user);
  logoutButton();
  getVocabulary(user.uid).then((vocabulary) => showVocabulary(vocabulary));
};

export default startApp;
