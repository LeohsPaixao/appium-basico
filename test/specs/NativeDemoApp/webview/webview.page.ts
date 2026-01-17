export default class WebviewElements {
  elements = {
    buttonGetStarted: () => $('~Get Started'),
    getStartedScreen: () => $('//android.view.View[@text="Getting Started"]'),
    webviewPage: () => $('~Webview'),
    home: () => $('~Home page'),
    inputSearch: () => $('~Search (Ctrl+K)'),
    homeScreen: () => $('//android.view.View[@resource-id="__docusaurus"]'),
    navigationBar: () => $('//android.widget.Button[@text="Toggle navigation bar"]'),
    modeColor: () => $('//android.widget.Button[@text="Switch between dark and light mode (currently light mode)"]'),
    closeNavigationBar: () => $('//android.widget.Button[@text="Close navigation bar"]'),
    search: () => $('//android.widget.EditText[@resource-id="docsearch-input"]'),
    protocols: () => $('//android.view.View[@content-desc="Visual Testing"]'),
    visualTestingScreen: () => $('//android.widget.TextView[@text="Visual Testing"]'),
  };

  async visit() {
    await this.elements.webviewPage().click();
    await this.elements.webviewPage().waitForDisplayed();
  }

  async onClickButtonSearch() {
    await this.elements.inputSearch().waitForDisplayed();
    await this.elements.inputSearch().click();
  }

  async typeSomethingInSearch(text: string) {
    await this.elements.search().addValue(text);
  }

  async onClickProtocols() {
    await this.elements.protocols().click();
  }

  async navigateToGetStarted() {
    await this.elements.buttonGetStarted().waitForDisplayed();
    await this.elements.buttonGetStarted().click();
  }

  async navigateToHome() {
    await this.elements.home().waitForDisplayed();
    await this.elements.home().click();
    await this.elements.homeScreen().waitForDisplayed();
  }

  async validateHomeScreen() {
    await expect(this.elements.homeScreen()).toBeDisplayed();
  }

  async validateGetStartedScreen() {
    await expect(this.elements.getStartedScreen()).toBeDisplayed();
  }

  async validateVisualTestingScreen() {
    await expect(this.elements.visualTestingScreen()).toBeDisplayed();
  }
}
