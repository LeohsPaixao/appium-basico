const gestures = require("../../support/helpers/gestures");
const WebviewElements = require("./webview/webviewElements");

const elements = new WebviewElements();

describe("-> Webview", () => {
    before(async () => {
        await elements.webviewPage().click();
        await driver.pause(5000);
    });

    after(async () => await driver.pause(1000));

    it("Should be able to navigate to Get Started and return", async () => {
        const startX = 50;
        const startY = 2500;
        const endX = 50;
        const endY = 1500;

        await gestures.performSwipe(driver, startX, startY, endX, endY);

        await elements.buttonGetStarted().click();

        await expect(elements.breadcrumbs()).toBeDisplayed();

        await elements.home().click();

        await expect(elements.homeScreen()).toBeDisplayed();
    });

    it("Should be able to search something", async () => {
        await elements.buttonSearch().click();

        await elements.search().addValue("Visual Testing");

        await elements.protocols().click();

        await expect(elements.visualTestingScreen()).toBeDisplayed();
    });
});
