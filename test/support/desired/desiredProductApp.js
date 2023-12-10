const mainConfig = require('./main');

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const androidVersion = isGitHubActions ? '11' : '13';
const lauchTimeout = isGitHubActions ? 60000 : 20000
const installTimeout = isGitHubActions ? 60000 : 20000
const adbTimeout = isGitHubActions ? 60000 : 20000

const productApp = {
    capabilities: [
        {
            platformName: "Android",
            "appium:platformVersion": androidVersion,
            "appium:deviceName": "AppiumAVD",
            "appium:deviceOrientation": "portrait",
            "appium:automationName": "UiAutomator2",
            "appium:app": "./apps/product_registration.apk",
            "appium:appPackage": "br.com.pztec.estoque",
            "appium:appActivity": "br.com.pztec.estoque.Inicio",
            "appium:appWaitActivity": "br.com.pztec.estoque.ListaAssunto",
            "appium:appWaitDuration": 30000,
            "appium:uiautomator2ServerLaunchTimeout": lauchTimeout,
            "appium:uiautomator2ServerInstallTimeout": installTimeout,
            "appium:adbExecTimeout": adbTimeout
        },
    ],

    specs: ["./test/specs/productApp/*.js"],
};

const mergedConfig = { ...mainConfig, ...productApp };

module.exports = mergedConfig;
