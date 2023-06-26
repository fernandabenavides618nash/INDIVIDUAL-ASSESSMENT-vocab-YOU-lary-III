import { getVocabulary, getSingleVocabulary, deleteVocabulary } from '../api/vocabularyData';
import addVocabularyForm from '../components/forms/newVocabularyForm';
import { showVocabulary } from '../pages/vocabulary';

const domEvents = (user) => {
  document.querySelector('#main-div').addEventListener('click', (e) => {
    // DELETING VOCABULARY
    if (e.target.id.includes('deleteVocabularyBtn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Do you want to delet Vocabulary?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocabulary(firebaseKey).then(() => {
          getVocabulary(user.uid).then(showVocabulary);
        });
      }
    }
    // ADDING VOCABULLARY
    if (e.target.id.includes('addAVocabualryBtn')) {
      addVocabularyForm(user);
    }
    // UPDATING VOCABULARY
    if (e.target.id.includes('editVocabularyBtn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocabulary(firebaseKey).then((vocabularyObj) => addVocabularyForm(vocabularyObj, user));
    }
  });
};

export default domEvents;
