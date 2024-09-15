class WebviewElements {
    buttonGetStarted = () => $("~Get Started");
    breadcrumbs = () => $('//android.view.View[@text="Breadcrumbs"]');
    webviewPage = () => $('~Webview');
    home = () => $("~WebdriverIO");
    homeScreen = () => $('//android.view.View[@resource-id="__docusaurus"]');
    navigationBar = () => $('//android.widget.Button[@text="Toggle navigation bar"]');
    modeColor = () => $('//android.widget.Button[@text="Switch between dark and light mode (currently light mode)"]');
    closeNavigationBar = () => $('//android.widget.Button[@text="Close navigation bar"]');
    buttonSearch = () => $('//android.widget.Button[@text="Search"]');
    search = () => $('//android.widget.EditText[@resource-id="docsearch-input"]');
    protocols = () => $('//android.view.View[@content-desc="Visual Testing"]');
    visualTestingScreen = () => $('//android.widget.TextView[@text="Visual Testing"]');
}

module.exports = WebviewElements;
