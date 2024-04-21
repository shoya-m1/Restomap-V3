import restaurantSource from "../../data/source";
import "../../component/listRestaurants";
import "../../component/heroSection";
import "../../component/setLoading";
import $ from "jquery";

const Home = {
  async render() {
    return `
    <hero-section>
    
    </hero-section>
    <section class="content" id="content">
        <img tabindex="-1" class="shape" src="./images/shape.png" alt="shape" />
        <h3 tabindex="0">Explore Restaurant</h3>
        <div class="content-inner">
          <ul class="mainCard"></ul>
        </div>
    </section>
      `;
  },

  async afterRender() {
    // Tampilkan indikator loading sebelum memuat data
    const loading = $("<set-loading></set-loading>").get(0);
    $(".mainCard").html(loading);

    try {
      const restaurants = await RestaurantSource.home();

      // Sembunyikan indikator loading setelah data dimuat
      $(loading).remove();

      restaurants.forEach((resto) => {
        const listResto = $("<list-restaurants></list-restaurants>").get(0);
        listResto.resto = resto;
        $(".mainCard").append(listResto);
      });
    } catch (error) {
      // Tangani error jika terjadi kesalahan saat memuat data
      console.error(error);
      $(loading).remove();
      $(".mainCard").html(
        "<p>Terjadi kesalahan saat memuat data restoran.</p>"
      );
    }
  },
};

export default Home;
