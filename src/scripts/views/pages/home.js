import $ from 'jquery';
import restaurantSource from '../../data/source';
import '../../component/listRestaurants';
import '../../component/heroSection';

const Home = {
  async render() {
    return `
    <hero-section>
    
    </hero-section>
    <section class="content" id="content">
        <h3 tabindex="0">Explore Restaurant</h3>
        <div class="content-inner">
          <ul class="mainCard">
          </ul>
        </div>
    </section>
      `;
  },

  async afterRender() {
    $('.load').css('display', 'flex');
    try {
      const restaurants = await restaurantSource.home();

      $('.load').css('display', 'none');

      restaurants.forEach((resto) => {
        const listResto = $('<list-restaurants></list-restaurants>').get(0);
        listResto.resto = resto;
        $('.mainCard').append(listResto);
      });
    } catch (error) {
      $('.content-inner').html(
        "<p class='errorHandling'>Terjadi kesalahan saat memuat data restoran.</p>",
      );
    }
  },
};

export default Home;
