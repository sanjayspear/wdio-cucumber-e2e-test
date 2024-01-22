// Import necessary modules
import Page from "./page.js";
import { expect } from "chai";
import reporter from "../helper/reporter.js";

// Define InventoryPage class extending the Page class
class InventoryPage extends Page {
  // Constructor to call the constructor of the parent class
  constructor() {
    super();
  }

  // Page Objects - Getters for the selectors
  get productItemSelector() {
    return '.inventory_item_name';
  }

  get productPriceSelector() {
    return '.inventory_item_price';
  }

  // Page Actions - Validate Product List method
  async validateProductList(testid: string, noOfProducts: string) {
    try {
      // Check if the number of products is provided
      if (!noOfProducts) {
        throw new Error(`Invalid product count: ${noOfProducts}`);
      }

      // Use browser.waitUntil for waiting until the elements are present
      await browser.waitUntil(async () => {
        const eleArr = await $$(this.productItemSelector);
        return eleArr.length === parseInt(noOfProducts);
      }, { timeout: 10000, timeoutMsg: 'Product list did not match expected count' });

    } catch (err) {
      // Handle errors and report them
      reporter.addStep(testid, "error", "Known Issue - Product Count Mismatch", true, "JIRA#30056", 'Critical');
      err.message = `${testid}: Failed when comparing product count, ${err.message}`;
      throw err;
    }
  }

  // Page Actions - Validate Product Prices method
  async validateProductPrices(testid: string) {
    try {
      // Get the list of price elements
      let priceList = await $$(this.productPriceSelector);
      let priceArr = [];

      // Loop through each price element and get the text
      for (let i = 0; i < priceList.length; i++) {
        let price = await priceList[i].getText();
        priceArr.push(price);
      }

      // Convert prices to numbers and check if they are greater than 0
      let actualPrice = priceArr.map((ele) => +ele.replace("$", ""));
      for (let price of actualPrice) {
        expect(price).to.be.greaterThan(0, `Product price is not valid: ${price}`);
      }
    } catch (err) {
      // Handle errors and rethrow
      throw err;
    }
  }
}

// Export an instance of the InventoryPage class
export default new InventoryPage();
