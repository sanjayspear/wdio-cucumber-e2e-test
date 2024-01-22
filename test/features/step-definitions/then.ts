// @ts-nocheck
import { Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import reporter from "../../helper/reporter.js";
import InventoryPage from "../../page-objects/InventoryPage.js";

Then(/^Inventory page (.*)\s? list (.*) products$/, async function (negativeCheck, noOfProducts) {
    try {
      reporter.addStep(this.testid, "info", "Checking the product list...");
      await InventoryPage.validateProductList(this.testid, noOfProducts);
    } catch (err) {
      err.message = `${this.testid}: Failed at validating product list: , ${err.message}`;
      throw err;
    }
  }
);

Then(/^Validate all products have valid price$/, async function () {
  try {
    reporter.addStep(this.testid, "info", "Checking the product price...");
    await InventoryPage.validateProductPrices(this.testid);
  } catch (err) {
    err.message = `${this.testid}: Failed at validating product prices: , ${err.message}`;
    throw err;
  }
});
