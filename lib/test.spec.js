const { assert } = require("chai");
const { VSBrowser } = require("vscode-extension-tester");

describe("My Test Suite", () => {
  let browser;
  let driver;

  before(async () => {
    browser = VSBrowser.instance;
    driver = browser.driver;
  });

  it("My Test Case", async () => {
    const title = await driver.getTitle();
    assert.equal(title, "whatever");
  });
});
