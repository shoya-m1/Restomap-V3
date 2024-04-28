/* eslint-disable no-undef */
Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.getName', 5);
  I.click('.getName');
});

Scenario('Reviewing a Restaurant', async ({ I }) => {
  const nameOfReviewer = 'Reviewer';
  const reviewContent = 'testing';

  I.seeElement('#captionReview');

  I.fillField('#name', nameOfReviewer);
  I.fillField('#review', reviewContent);
  I.click("button[type='submit']");
});
