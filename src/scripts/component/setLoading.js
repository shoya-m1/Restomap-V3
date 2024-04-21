class SetLoading extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
    <div class="load">
        <div class="loader"></div>
    </div>
      `;
  }
}

customElements.define("set-loading", SetLoading);
