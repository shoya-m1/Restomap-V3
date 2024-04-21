class DrawerMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <input id="checkbox2" type="checkbox" />
      <button
        tabindex="0"
        class="toggle toggle2"
        for="checkbox2"
        aria-label="button menu"
      >
        <div id="bar4" class="bars"></div>
        <div id="bar5" class="bars"></div>
        <div id="bar6" class="bars"></div>
      </button>
      `;
  }
}

customElements.define('drawer-menu', DrawerMenu);
