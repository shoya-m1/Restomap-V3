import '../../component/detailRestaurant';
import $ from 'jquery';
import UrlParser from '../../routes/urlParser';
import source from '../../data/source';
import LikeButtonInitiator from '../../utils/likeButtonInitiator';

const Detail = {
  async render() {
    return `
        <section class="detail" id="content"></section>
        <div class="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    $('.load').css('display', 'flex');
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await source.detailRestaurant(url.id);

      const detailResto = $('<detail-restaurant></detail-restaurant>').get(0);
      detailResto.resto = restaurant;
      $('.detail').html(detailResto);

      $('.load').css('display', 'none');
      LikeButtonInitiator.init({
        likeButtonContainer: $('.likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
        },
      });
    } catch (error) {
      $('.detail').html(
        "<p class='errorHandling'>Terjadi kesalahan saat memuat data restoran.</p>",
      );
    }
  },
};

export default Detail;
