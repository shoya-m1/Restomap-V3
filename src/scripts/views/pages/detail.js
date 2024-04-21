import "../../component/detailRestaurant";
import UrlParser from "../../routes/urlParser";
import source from "../../data/source";
import LikeButtonInitiator from "../../utils/likeButtonInitiator";

import $ from "jquery";

const Detail = {
  async render() {
    return `
        <section class="detail" id="content"></section>
        <div class="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await source.detailRestaurant(url.id);

    const detailResto = $("<detail-restaurant></detail-restaurant>").get(0);
    detailResto.resto = restaurant;
    $(".detail").html(detailResto);

    LikeButtonInitiator.init({
      likeButtonContainer: $(".likeButtonContainer"),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });

    // window.addEventListener("scroll", () => {
    //   console.log(window.scrollY);
    //   if (window.scrollY < 10) {
    //   } else {
    //     $("nav").removeClass("nav-light");
    //     $(".nav-item a").css("color", "white");
    //   }
    // });
    // $(".nav-item a").css("color", "rgb(94, 94, 94)");
    // $("nav").addClass("fixed-nav");
  },
};

export default Detail;
