import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addVocabularyForm = (obj = {}) => {
  clearDom();
  const domString = `
        <form id="${obj.firebaseKey ? `editVocabulary--${obj.firebaseKey}` : 'submitVocabulary'}">
        <div class="mb-3">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" aria-describedby="vocabularyTitle" placeholder="Vocabulary Title" value="${obj.title || ''}" required>
        </div>
        <div class="mb-3">
            <label for="definition">Definition</label>
            <textarea class="form-control" placeholder="Vocabulary Definition" id="definition" value="${obj.definition || ''}" required></textarea>
        </div>
        <select id="language" class="form-select" aria-label="Default select example">
            <option selected>Select a Language</option>
            <option value="html" ${obj.language ? 'checked' : ''}>html</option>
            <option value="css" ${obj.language ? 'checked' : ''}>css</option>
            <option value="javaScript" ${obj.language ? 'checked' : ''}>javaScript</option>
        </select>
        <button id="submit-card" type="submit" class="btn btn-primary">Submit Vocabulary</button>
        </form>
        `;
  renderToDom('#addVocabularyForm', domString);
};

export default addVocabularyForm;
