// @ts-nocheck
import { Given } from "@wdio/cucumber-framework";
import { expect } from "chai";
import reporter from "../../helper/reporter.js";
import sauseHomePage from "../../page-objects/sause.home.page.js";

Given(/^As (a|an) (.*) User I login to inventory web app$/, async function (prefixTxt, userType, dataTable) {
    try {
        reporter.addStep(this.testid, "info", "Login to sause demo app");
        await sauseHomePage.navigateTo(browser.options.sauseDemoURL);
        await sauseHomePage.loginToSauseApp(this.testid, process.env.TEST_PROBLEM_USERNAME, process.env.TEST_PROBLEM_PASSOWRD)
    } catch (err) {
        err.message = `${this.testid}: Failed at login step: , ${err.message}`;
        throw err;
    }
});
