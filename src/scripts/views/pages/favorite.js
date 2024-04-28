import $ from 'jquery';
import FavoriteRestaurantIdb from '../../data/favoriteIdb';
import '../../component/listRestaurants';

const Favorite = {
  async render() {
    return `
    <section class="content" id="content">
      <img tabindex="-1" class="shape" src="./images/shape.png" alt="shape" />
      <h3 tabindex="0">Restaurant Favorite</h3>
      <div class="content-inner">
        <ul class="mainCard">
          <p class="message_not_found">Tidak ada restaurant favorite</p>
        </ul>
      </div>
    </section>
    `;
  },

  async afterRender() {
    $('.load').css('display', 'flex');
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      if (restaurants.length >= 1) {
        $('.message_not_found').css('display', 'none');
      }
      restaurants.forEach((resto) => {
        const listResto = $('<list-restaurants></list-restaurants>').get(0);
        listResto.resto = resto;
        $('.mainCard').append(listResto);
      });
      $('.load').css('display', 'none');
    } catch (error) {
      $('.content-inner').html(
        "<p class='errorHandling'>Terjadi kesalahan saat memuat data restoran.</p>",
      );
    }
  },
};

export default Favorite;
