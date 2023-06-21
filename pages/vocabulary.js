import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyVocabulary = () => {
  const domStrig = '<h1>No Vocabulary</h1>';
  renderToDom('#vocabularyContainer', domStrig);
};

const showVocabulary = (array) => {
  clearDom();
  console.warn(array);
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="addAVocabualryBtn">Create Vocabulary</button>';
  renderToDom('#addVocabularyBtn', btnString);
  let domString = '';
  array.forEach((item) => {
    domString += `
        <div class="card">
            <h5 class="card-header">${item.tittle}</h5>
            <div class="card-body">
                <h5 class="card-title">${item.language}</h5>
                <p class="card-text">${item.definition}</p>
                <button class="btn btn-primary" id='editVocabularyBtn--${item.firebasekey}' >Edit Vocabulary</button>
                <button class="btn btn-primary" id='deleteVocabularyBtn--${item.firebasekey}' >Delete Vocabulary</button>
            </div>
        </div>`;
  });
  renderToDom('#vocabularyContainer', domString);
};

export { emptyVocabulary, showVocabulary };
