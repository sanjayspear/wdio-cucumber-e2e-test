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

Given(/^A web page is opened$/, async function () {
  await browser.url("/inputs");
  await browser.setTimeout({ implicit: 15000, pageLoad: 1000 });
  await browser.maximizeWindow();
});

When(/^Perform web interactions$/, async function () {
  /**
   * 1. Input box
   * Actions:
   * 1. Type into input box
   * 2. Clear the field and type or just addValue
   * 3. Click and type
   * 4. type slowly like real user
   *
   */
  let num = 9867;
  let strNum = num.toString();

  let ele = await $(`[type=number]`);

  for (let i = 0; i <= strNum.length; i++) {
    let charStr = strNum.charAt(i);
    let _number = Number(charStr);
    await browser.pause(1000);
    await ele.addValue(_number);
  }

  //Approach 2
  // await browser.pause(1000);

  // await ele.click();
  // for (let i = 0; i <= strNum.length; i++) {
  //   let charStr = strNum.charAt(i);
  //   await browser.pause(1000);
  //   await browser.keys(charStr);
  // }
});
