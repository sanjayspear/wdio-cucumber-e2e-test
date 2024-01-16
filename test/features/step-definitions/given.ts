import { Given } from "@wdio/cucumber-framework";
import { expect } from "chai";

Given(/^Login to inventory web app$/, async function(){
    console.log(`Test username: ${process.env.TEST_USERNAME}`);
    //Launch browser and Open url
    await browser.url("https://www.saucedemo.com/");
    //await browser.setTimeout({implicit: 15000, pageLoad: 10000});

    //Login to the inventory application
    try {
        await $(`#user-name`).setValue(process.env.TEST_PROBLEM_USERNAME);
        await $(`#password`).setValue(process.env.TEST_PROBLEM_PASSOWRD);
        await $(`#login-button`).click();
    } catch (err) {
        console.log(`Error while login. Retrying..`);
        await browser.refresh();
        await browser.pause(2000);
        await $(`#user-name`).setValue(process.env.TEST_PROBLEM_USERNAME);
        await $(`#password`).setValue(process.env.TEST_PROBLEM_PASSOWRD);
        await $(`#login-button`).click();
    }
    let title1 = await $(`.title`).getText();

    expect(title1).to.equal(`Products`);

    // /**Login with another user */
    // await browser.pause(2000);
    // await browser.reloadSession();
    // await browser.url("https://www.saucedemo.com/");
    // await browser.setTimeout({implicit: 15000, pageLoad: 10000});
    // await $(`#user-name`).setValue(`visual_user`);
    // await $(`#password`).setValue(`secret_sauce`);
    // await $(`#login-button`).click();
    // let title2 = await $(`.title`).getText();

    // expect(title2).to.equal(`Products`);
    await browser.back();
    await browser.pause(2000);
    await browser.forward();
    //await browser.debug();
});
