class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <h1 tabindex="0">RESTOMAP</h1>
    <a href="#mainContent" class="skip-link">Menuju ke konten</a>
    `;
  }
}

customElements.define('app-bar', AppBar);
