import { Given } from "@wdio/cucumber-framework";
import { expect } from "chai";

Given(/^Login to inventory web app$/, async function(){
    //Launch browser and Open url
    await browser.url("https://www.saucedemo.com/");
    await browser.setTimeout({implicit: 15000, pageLoad: 10000});

    //Login to the inventory application
    await $(`#user-name`).setValue(`problem_user`);
    await $(`#password`).setValue(`secret_sauce`);
    await $(`#login-button`).click();
    let title = await $(`.title`).getText();

    expect(title).to.equal(`Products`);

    await browser.pause(3000);
});
