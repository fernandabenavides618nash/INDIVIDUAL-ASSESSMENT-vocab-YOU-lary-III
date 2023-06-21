const clearDom = () => {
  document.querySelector('#addVocabularyBtn').innerHTML = '';
  document.querySelector('#addVocabularyForm').innerHTML = '';
  document.querySelector('#vocabularyContainer').innerHTML = '';
};

export default clearDom;
