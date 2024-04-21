class LikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
        <button aria-label="like this restaurant" id="likeButton" class="like">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
        </button>
        `;
  }
}

customElements.define("like-button", LikeButton);
