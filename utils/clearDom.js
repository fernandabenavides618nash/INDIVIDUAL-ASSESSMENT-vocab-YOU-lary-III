const clearDom = () => {
  document.querySelector('#addVocabularyBtn').innerHTML = '';
  document.querySelector('#addVocabularyForm').innerHTML = '';
  document.querySelector('#vocabularyContainer').innerHTML = '';
  // document.querySelector('#navBar').innerHTML = '';
};

export default clearDom;
