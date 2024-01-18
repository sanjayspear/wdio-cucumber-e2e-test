import { setWorldConstructor } from "@wdio/cucumber-framework";
import { expect } from "chai";

class CustomWorld {
  testid: String;
  appid: String;
  constructor() {
    this.appid = "";
    this.testid= "";
  }
}
setWorldConstructor(CustomWorld);
