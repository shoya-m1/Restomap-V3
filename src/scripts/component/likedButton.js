class LikedButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
        <button aria-label="unlike this restaurant" id="likeButton" class="like">
            <i class="fa fa-heart" aria-hidden="true"></i>
        </button>
    `;
  }
}

customElements.define("liked-button", LikedButton);
