import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domStrig = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" tittle" href="#">VOCABULARY</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" id="allVocabulary">All Vocabulary</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link" href="#" id="filterHtml">html</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="filterCss">css</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="filterJavaScript">javaScript</a>
                        </li>
                        <li>
                        <div id="logoutBtn"></div>
                        </li>
                    </ul>
        </nav>`;
  renderToDom('#navBar', domStrig);
};

export default navBar;
