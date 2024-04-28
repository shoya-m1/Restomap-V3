const assert = require("assert");

Feature("UnFavoriting Restaurants");

let firstRestoName;

Before(async ({ I }) => {
  I.amOnPage("/");

  I.seeElement(".getName");
  //   const firstResto = locate('.resto__name').first();
  firstRestoName = await I.grabTextFrom(".getName");
  //   I.click(firstResto);

  I.click(".getName");

  I.waitForVisible("#likeButton", 10);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
});

Scenario("Showing favorited resto", async ({ I }) => {
//   I.waitForVisible("#likeButton", 10);
  I.seeElement(".mainCard");
  const favoritedRestoName = await I.grabTextFrom(".content-info a");

  assert.strictEqual(firstRestoName, favoritedRestoName);
});

Scenario("Unfavoriting a restaurant", ({ I }) => {
  I.seeElement(".getName");

  I.click(".getName");

  I.waitForVisible("#likeButton", 10);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");

  I.seeElement(".mainCard");
  I.see("Tidak ada restaurant favorite", ".message_not_found");
});
