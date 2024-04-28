class LikedButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
        <button aria-label="unlike this restaurant" id="likeButton" class="like">
          <span class="unlike"></span>    
        </button>
    `;
  }
}

customElements.define('liked-button', LikedButton);
