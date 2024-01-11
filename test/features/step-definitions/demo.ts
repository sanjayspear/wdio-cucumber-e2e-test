import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
//import chai from "chai";

Given(/^Google page is opened$/, async function () {
  console.log("Before Opening The Browser");
  await browser.url("https://www.google.com");
  await browser.pause(3000);
  console.log("After Opening The Browser");
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>> My search item: ${searchItem}`);
  const searchInput = await $("[name=q]");
  await searchInput.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  const firstSearchResult = await $("h3");
  await firstSearchResult.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>> expectedURL: ${expectedURL}`);
  const currentURL = await browser.getUrl();
  expect(currentURL).to.equal(expectedURL);
});
