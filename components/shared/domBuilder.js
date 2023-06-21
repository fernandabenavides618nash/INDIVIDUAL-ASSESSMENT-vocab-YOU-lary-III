import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="navBar"></div>
    <div id="main-div">
        <div id="addVocabularyBtn"></div>
        <div id="#addVocabularyForm"></div>
        <div id="#vocabularyContainer"></div>
    </div>
    `;
  renderToDom('#app', domString);
};

export default domBuilder;
