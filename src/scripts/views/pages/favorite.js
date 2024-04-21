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
        <ul class="mainCard"></ul>
      </div>
    </section>
    `;
  },

  async afterRender() {
    $('.load').css('display', 'flex');
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

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
