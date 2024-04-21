import $ from 'jquery';
import source from '../data/source';
import CONFIG from '../globals/config';

class DetailRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set resto(resto) {
    this._resto = resto;
    this._source = source;
    this._listData(resto);
    this.render();
  }

  _listData(dataBaru) {
    this._categoriesList = this._resto.categories
      .map((category) => `<span>${category.name}</span>`)
      .join(', ');

    this._foodsList = this._resto.menus.foods
      .map((food) => `<li>${food.name}</li>`)
      .join('');

    this._drinksList = this._resto.menus.drinks
      .map((drink) => `<li>${drink.name}</li>`)
      .join('');

    let length = 1;
    this._reviewList = dataBaru.customerReviews
      .map((review) => {
        const viewCommentClass = length % 2 === 0 ? 'view-comment-margin' : '';
        length += 1;
        return `
            <li class="${viewCommentClass}">
              <div class="icon-user">
                <div></div>
              </div>
              <div class="info-comment">
                <b>${review.name}</b>
                <p>${review.date}</p>
                <p>${review.review}</p>
              </div>
            </li>
          `;
      })
      .join('');
  }

  render() {
    if (this._resto) {
      this.innerHTML = /* html */ `
         <h1 tabindex="0">Detail Restaurant</h1>
         <div tabindex="0" class="detail-img">
           <img src="${CONFIG.BASE_IMAGE_URL}${this._resto.pictureId}" alt="detail-img" />
         </div>
         <h2 tabindex="0">${this._resto.name}</h2>
         <ul tabindex="0" class="address">
           <li>${this._resto.city} ,</li>
           <li>${this._resto.address}</li>
           |
           <li>${this._categoriesList}</li>
         </ul>
         <p tabindex="0" class="info">
           ${this._resto.description}
         </p>
         <h3 tabindex="0">Daftar Menu</h3>
         <div tabindex="0" class="daftar-menu">
           <div tabindex="0" class="makanan">
             <b tabindex="0">Makanan</b>
             <ul tabindex="0">${this._foodsList}</ul>
           </div>
           <div tabindex="0" class="minuman">
             <b tabindex="0">Minuman</b>
             <ul tabindex="0">${this._drinksList}</ul>
           </div>
         </div>
         <h3 tabindex="0" class="comment">Comments ( ${this._resto.customerReviews.length} )</h3>
         <ul tabindex="0" class="view-comment">${this._reviewList}</ul>
         <h3 tabindex="0" id="captionReview">Tambahkan Review</h3>
         <form class="add-review">
           <div class="input-group">
             <input required type="text" id="name" class="input" placeholder="Masukkan Nama Anda">
             <label for="name" class="user-label">Nama</label>
           </div>
           <div class="input-group">
             <textarea required id="review" class="input" placeholder="Tulis Pesan Anda"></textarea>
             <label for="review" class="user-label">Ulasan</label> <!-- Menggunakan for="review" -->
           </div>
           <button type="submit" name="submit" class="submit" id="submit">
             Submit
           </button>
         </form>
      `;

      $('.add-review').on('submit', (event) => {
        event.preventDefault();
        this._submitReview();
      });
    }
  }

  async _submitReview() {
    const nameInput = $('#name').val().trim();
    const reviewInput = $('#review').val().trim();

    const newReview = {
      id: this._resto.id,
      name: nameInput,
      review: reviewInput,
    };
    const dataBaru = await this._source.addReview(newReview);
    this._listData(dataBaru);
    this.render();
    $('#name').val('');
    $('#review').val('');
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
