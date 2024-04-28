import 'regenerator-runtime';
import '../styles/main.scss';
import './component/appBar';
import './component/drawerMenu';
import App from './views/app';
import swRegister from './utils/swRegister';

const mainContent = document.getElementById('mainContent');
const skipLink = document.querySelector('.skip-link');
const app = new App(mainContent);

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.focus();
});
