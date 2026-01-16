import { performSwipe } from '../../../support/helpers/gestures';

export default class WebviewElements {
    elements = {
        buttonGetStarted: () => $("~Get Started"),
        breadcrumbs: () => $('//android.view.View[@text="Breadcrumbs"]'),
        webviewPage: () => $('~Webview'),
        home: () => $("~WebdriverIO"),
        homeScreen: () => $('//android.view.View[@resource-id="__docusaurus"]'),
        navigationBar: () => $('//android.widget.Button[@text="Toggle navigation bar"]'),
        modeColor: () => $('//android.widget.Button[@text="Switch between dark and light mode (currently light mode)"]'),
        closeNavigationBar: () => $('//android.widget.Button[@text="Close navigation bar"]'),
        buttonSearch: () => $('//android.widget.Button[@text="Search"]'),
        search: () => $('//android.widget.EditText[@resource-id="docsearch-input"]'),
        protocols: () => $('//android.view.View[@content-desc="Visual Testing"]'),
        visualTestingScreen: () => $('//android.widget.TextView[@text="Visual Testing"]'),
    }

    async visit() {
        await this.elements.webviewPage().click();
        await this.elements.webviewPage().waitForDisplayed();
    }

    async onClickButtonSearch() {
        await this.elements.buttonSearch().click();
    }

    async typeSomethingInSearch(text: string) {
        await this.elements.search().addValue(text);
    }

    async onClickProtocols() {
        await this.elements.protocols().click();
    }

    async navigateToGetStarted() {
        const startX = 50;
        const startY = 2500;
        const endX = 50;
        const endY = 1500;

        await performSwipe(driver, startX, startY, endX, endY);
        await this.elements.buttonGetStarted().waitForDisplayed();
        await this.elements.buttonGetStarted().click();
    }

    async navigateToHome() {
        await this.elements.home().click();
        await this.elements.homeScreen().waitForDisplayed();
    }

    async validateHomeScreen() {
        await expect(this.elements.homeScreen()).toBeDisplayed();
    }

    async validateBreadcrumbs() {
        await expect(this.elements.breadcrumbs()).toBeDisplayed();
    }

    async validateVisualTestingScreen() {
        await expect(this.elements.visualTestingScreen()).toBeDisplayed();
    }
}