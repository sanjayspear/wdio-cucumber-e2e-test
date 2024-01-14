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
  //await browser.url("/inputs");
  //await browser.url("/dropdown");
  //await browser.url("/checkboxes");
  //await browser.url("/windows");
  //await browser.url("/javascript_alerts");
  //await browser.url("/upload");
  //await browser.url("/frames");
  await browser.url("/tables");
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
  // let num = 9867;
  // let strNum = num.toString();
  // let ele = await $(`[type=number]`);
  // for (let i = 0; i <= strNum.length; i++) {
  //   let charStr = strNum.charAt(i);
  //   let _number = Number(charStr);
  //   await browser.pause(1000);
  //   await ele.addValue(_number);
  // }
  //Approach 2
  // await browser.pause(1000);
  // await ele.click();
  // for (let i = 0; i <= strNum.length; i++) {
  //   let charStr = strNum.charAt(i);
  //   await browser.pause(1000);
  //   await browser.keys(charStr);
  // }
  /**
   * 2. Deopdown
   * Action
   * 1. Assert default option is selected
   * 2. Select by attribute, text, index
   * 3. Get a list of options
   */
  //1. Assert default option is selected
  // let ele = await $(`//select/option[@selected='selected']`);
  // await ele.click();
  // let val = await ele.getText();
  // expect(val).to.equal("Please select an option");
  // await browser.pause(3000);
  //2. Select by attribute, text, index
  //let ddEle = await $(`#dropdown`);
  //await ddEle.selectByIndex(0);
  //await ddEle.selectByVisibleText(`Option 2`);
  //await ddEle.selectByAttribute("value", "1");
  //await browser.pause(3000);
  //3. Get a list of options
  // let eleArr = await $$(`select > option`);
  // let expectedArr = ['Please select an option','Option 1','Option 2'];
  // let Actualarr = [];
  // console.log(`>> Optons Array Before: ${Actualarr}`);
  // for (let i = 0; i < eleArr.length; i++) {
  //   let ele = eleArr[i];
  //   let val = await ele.getText();
  //   Actualarr.push(val);
  //   console.log(val);
  // }
  // console.log(`>> Optons Array After: ${Actualarr}`);
  // const isEqual: boolean = JSON.stringify(Actualarr) === JSON.stringify(expectedArr);
  // console.log(`Is dropdown options are displayed as expected? ${isEqual}`);
  /**
   * 3. Checkbox
   * Actions
   * 1. Select an option
   * 2. Unselect an option (if selected)
   * 3. Assert if option is selected
   * 4. Select all options
   */
  // //1. Select an option
  // let ele1 = $(`//form[@id='checkboxes']//input[1]`);
  // await ele1.click();
  // await browser.pause(2000);
  // let ele2 = $(`//form[@id='checkboxes']//input[2]`);
  // await ele2.click();
  // await browser.pause(2000);
  // //2. Unselect an option (if selected)
  // if (ele1.isSelected()) {
  //   await ele1.click();
  // }
  //  //3. Assert if option is selected
  //  let isChecked = await ele1.isSelected();
  //  expect(isChecked).to.be.false;
  // await browser.pause(2000);
  // if (!ele2.isSelected()) {
  //   await ele2.click();
  // }
  // //4. Select all options
  // let eleArr = await $$(`//form[@id='checkboxes']//input`);
  // for(let i=0; i<eleArr.length; i++){
  //   let flag = eleArr[i];
  //   if(!flag.isSelected()){
  //     await flag.click();
  //     await browser.pause(2000);
  //   }
  // }
  // await browser.pause(3000);
  // /**
  //  * 4. Window handling
  //  * Steps:
  //  * 1. Launch the browser
  //  * 2. Open another window
  //  * 3. Switch to the window based on title
  //  * 4. Swich back to the main / parent window
  //  *
  //  * Methods used
  //  * 1. getTitle();
  //  * 2. getWindowHandle();
  //  * 3. getWindowHandels();
  //  * 4. switchToWindow();
  //  */
  // await $(`//a[text()='Click Here']`).click();
  // await $(`//a[text()='Elemental Selenium']`).click();
  // let parentWindow = await browser.getWindowHandle();
  // let childWindows = await browser.getWindowHandles();
  // let childTitles = [];
  // for (let i = 0; i < childWindows.length; i++) {
  //   //console.log(`Child Window ${childWindows[i]} count ${i}`);
  //   if (parentWindow !== childWindows[i]) {
  //     await browser.switchToWindow(childWindows[i]);
  //     let title = await browser.getTitle();
  //     console.log(`Title from child window ${i} is ${title}`);
  //     childTitles.push(title);
  //   }
  // }
  // // Switch back to the parent window
  // await browser.switchToWindow(parentWindow);
  // // Get and assert title of parent window
  // let parentTitle = await browser.getTitle();
  // console.log(`Title from parent window is ${parentTitle}`);
  // expect(parentTitle).to.equal('The Internet');
  // // Assert titles of dynamic child windows
  // expect(childTitles).to.include.members(['New Window', 'Elemental Selenium | Elemental Selenium']);
  /**
   * 5. Handling alerts
   *
   * Methods used
   * 1. isAlertOpen()
   * 2. acceptAlert()
   * 3. dismissAlert()
   * 4. getAlertText()
   * 5. sendAlertTest()
   */
  // await $(`button=Click for JS Alert`).click();
  // if (await browser.isAlertOpen()) {
  //   let alertText = await browser.getAlertText();
  //   await browser.acceptAlert();
  //   let successMessage = await $(`//p[@id='result']`).getText();
  //   console.log(`Alert text is ${alertText}`);
  //   console.log(`Success Message is '${successMessage}'`);
  //   expect(successMessage).to.equal(`You successfully clicked an alert`);
  //   browser.pause(2000);
  // }
  // await $(`button=Click for JS Prompt`).click();
  // // Wait for the alert to be present
  // await browser.waitUntil(async () => {
  //   return await browser.isAlertOpen();
  // }, { timeout: 5000, timeoutMsg: 'Alert did not appear within 5 seconds' });
  // // Get the alert text
  // let alertText = await browser.getAlertText();
  // console.log(`>> alert text: ${alertText}`);
  // // Send text to the alert
  // await browser.sendAlertText('Hello JS Prompt!');
  // // Pause if needed (adjust the duration)
  // await browser.pause(2000);
  // // Accept the alert
  // await browser.acceptAlert();
  // /**
  //  * 6. File Upload
  //  */
  // await $(`#file-upload`).addValue(`${process.cwd()}/data/fileupload/dummy.txt`);
  // await $(`#file-submit`).click();
  // await browser.pause(2000);
  // /**
  //  * 6. Frames
  //  * Methods used:
  //  * 1. switchToFrame
  //  * 2. switchToParentFrame
  //  */
  // await $(`//a[text()='iFrame']`).click();
  // let ele = await $(`#mce_0_ifr`);
  // await browser.switchToFrame(ele);
  // await $(`#tinymce`).setValue(`Hi I'm learning automation iframe concepts`);
  // await browser.pause(2000);
  // await browser.switchToParentFrame();
  /**
   *7.  Keyboard actions
   */
  /**
   * 8. Basic scrolling
   * 
   * Methods:
   * 1. scrollIntoView
   * 
   * const elem = await $('#myElement');
    // scroll to specific element
    await elem.scrollIntoView();
    // center element within the viewport
    await elem.scrollIntoView({ block: 'center', inline: 'center' });
   */

  /**
   * Web table
   * What are going to cover:
   * 1. Check number of rows and columns
   * 2. Get whole table data
   * 3. Get single row [based on condition]
   * 4. Get single column
   * 5. Get single cell value [based on another cell]
   */

  //1. Check number of rows and columns
  let rowCount = await $$(`//table[@id='table1']/tbody/tr`).length;
  console.log(`>> Number of rows: ${rowCount}`);
  expect(rowCount).to.equal(4);
  let colCount = await $$(`//table[@id='table1']//thead/tr/th`).length;
  console.log(`>> Number of cols: ${colCount}`);
  expect(colCount).to.equal(6);

  //2. Get whole table data
  // let arr = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let personObj = {
  //     lastName: "",
  //     firstName: "",
  //     email: "",
  //     due: "",
  //     web: "",
  //     action: ""
  //   }
  //   for (let j = 0; j < colCount; j++) {
  //     let cellVal = await $(
  //       `//table[@id='table1']/tbody/tr[${i + 1}]/td[${j + 1}]`).getText();
  //       if(j === 0) personObj.lastName = cellVal;
  //       if(j === 1) personObj.firstName = cellVal;
  //       if(j === 2) personObj.email = cellVal;
  //       if(j === 3) personObj.due = cellVal;
  //       if(j === 4) personObj.web = cellVal;
  //       if(j === 5) personObj.action = cellVal;
  //   }
  //   arr.push(personObj);
  // }
  // console.log(`Whole table: ${JSON.stringify(arr)}`);

  // //3. Get single row [based on condition]
  // let arr = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let personObj = {
  //     lastName: "",
  //     firstName: "",
  //     email: "",
  //     due: "",
  //     web: "",
  //     action: "",
  //   };
  //   for (let j = 0; j < colCount; j++) {
  //     let cellVal = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[${j + 1}]`).getText();
  //     let firstName = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[2]`).getText();
  //     if (firstName === "Jason") {
  //       if (j === 0) personObj.lastName = cellVal;
  //       if (j === 1) personObj.firstName = cellVal;
  //       if (j === 2) personObj.email = cellVal;
  //       if (j === 3) personObj.due = cellVal;
  //       if (j === 4) personObj.web = cellVal;
  //       if (j === 5) personObj.action = cellVal;
  //     }
  //   }
  //   if(personObj.firstName){
  //     arr.push(personObj);
  //   }
  // }
  // console.log(`Whole table: ${JSON.stringify(arr)}`);

  //4. Get single column
  // let arr = [];
  // for(let i=0; i<rowCount; i++){
  //   let cellVal = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[4]`).getText();
  //   arr.push(cellVal);
  // }
  //console.log(`>> Single col values: ${arr}`);

  // //5. Get single cell value [based on another cell]
  // let arr = [];
  // for(let i=0; i<rowCount; i++){
  //     //let cellVal = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[${j + 1}]`).getText();
  //     let price = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[4]`).getText();
  //     let firstName = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[2]`).getText();
  //     if(+(price.replace("$", "")) > 50){
  //       arr.push(firstName);
  //     }
  // }
  // console.log(`>> Single col values: ${arr}`);
  
  
});
