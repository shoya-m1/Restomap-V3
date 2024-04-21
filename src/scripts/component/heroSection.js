class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <div class="hero-inner">
      <b tabindex="0">Welcome To</b>
      <h2 id="title" tabindex="0">Restaurant Mapping</h2>
    
      <p tabindex="0">
        Jelajahi ragam makanan lezat dari restoran-restoran terbaik di kota
        Anda. Menemukan Perpaduan Rasa yang Memukau, dan Menghadirkan
        Pengalaman Kuliner yang Mengesankan.
      </p>
    </div>
  `;
  }
}

customElements.define('hero-section', HeroSection);
