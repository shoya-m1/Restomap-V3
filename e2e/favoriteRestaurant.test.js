Feature("Favorite Restaurants");

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement(".mainCard");
  I.see("Tidak ada restaurant favorite", ".message_not_found");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("Tidak ada restaurant favorite", ".message_not_found");
  I.amOnPage("/");

  I.seeElement(".getName");
  //   I.click(".getName");

  // error waiting for locator('xpath=(//*[@class and contains(concat(\' \', normalize-space(@class), \' \'), \' resto__name \')])[position()=1]')
  //   const firstResto = (".getName");
  const firstRestoName = await I.grabTextFrom((".getName"));
  I.click(".getName");

  I.waitForVisible("#likeButton", 10);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement("list-restaurants");

  const likedRestaurantTitle = await I.grabTextFrom('.content-info a');
 
  assert.strictEqual(firstRestoName, likedRestaurantTitle);
});
