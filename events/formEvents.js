import { createVocabulary, getVocabulary, updateVocabulary } from '../api/vocabularyData';
import { showVocabulary } from '../pages/vocabulary';
import thisTime from '../utils/time';

const vocabularyFormEvents = (user) => {
  document.querySelector('#main-div').addEventListener('submit', (e) => {
    e.preventDefault();
    // SUBMITTING VOCABULARY
    if (e.target.id.includes('submitVocabulary')) {
      const payload = {
        definition: document.querySelector('#definition').value,
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        time: thisTime,
        uid: user.uid
      };
      createVocabulary(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocabulary(patchPayload).then(() => {
          getVocabulary(user.uid).then(showVocabulary);
        });
      });
    }
    // EDDITING VOCABULARY
    if (e.target.id.includes('#edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        definition: document.querySelector('#definition').value,
        title: document.querySelector('#title').vallue,
        language: document.querySelector('#language').value,
        time: thisTime,
        uid: user.uid,
        firebaseKey
      };
      updateVocabulary(payload).then(() => {
        getVocabulary(user.uid).then(showVocabulary);
      });
    }
  });
};

export default vocabularyFormEvents;
