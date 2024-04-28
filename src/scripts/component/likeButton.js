class LikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
        <button aria-label="like this restaurant" id="likeButton" class="like">
          <span class="add"></span>    
        </button>
        `;
  }
}

customElements.define('like-button', LikeButton);
