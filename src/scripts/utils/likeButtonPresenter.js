import $ from 'jquery';
import FavoriteRestaurantIdb from '../data/favoriteIdb';
import '../component/likeButton';
import '../component/likedButton';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = $(likeButtonContainer);
    this._resto = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    const likeButton = $('<like-button></like-button>');
    this._likeButtonContainer.html(likeButton);

    $('#likeButton').on('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    const likedButton = $('<liked-button></liked-button>');
    this._likeButtonContainer.html(likedButton);

    $('#likeButton').on('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
