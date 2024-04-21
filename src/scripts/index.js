import "regenerator-runtime";
import "./component/listRestaurants";
import "./component/appBar";
import "../styles/main.scss";
import App from "./views/app";
import swRegister from "./utils/swRegister";

const app = new App(document.querySelector("#mainContent"));

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
