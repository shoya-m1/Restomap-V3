import LikeButtonPresenter from "../../src/scripts/utils/likeButtonPresenter";
const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    restaurant,
  });
};
export { createLikeButtonPresenterWithRestaurant };
