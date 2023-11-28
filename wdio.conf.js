const main = {
    runner: "local",
    port: 4723,
    logLevel: "info",
    framework: "mocha",
    path: "/wd/hub",
    bail: 0,
    baseUrl: "",
    waitforTimeout: 60000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    maxInstances: 1,
    exclude: [],
    services: ["appium"],
    reporters: ["allure"],
    reporterOptions: {
        allure: {
            outputDir: "./allure-results",
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        },
    },
    mochaOpts: {
        ui: "bdd",
        timeout: 600000,
    },
};

const demoApp = {
    ...main,
    capabilities: [
        {
            platformName: "Android",
            "appium:platformVersion": "13",
            "appium:deviceName": "AppiumAVD",
            "appium:deviceOrientation": "portrait",
            "appium:automationName": "UiAutomator2",
            "appium:appPackage": "com.wdiodemoapp",
            "appium:appActivity": "com.wdiodemoapp.MainActivity",
            "appium:noReset": false,
            "appium:autoLaunch": true,
            "appium:newCommandTimeout": 240,
        },
    ],

    specs: ["./test/specs/NativeDemoApp/*.js"],
};

const apiDemos = {
    ...main,
    capabilities: [
        {
            platformName: "Android",
            "appium:platformVersion": "13",
            "appium:deviceName": "AppiumAVD",
            "appium:deviceOrientation": "portrait",
            "appium:automationName": "UiAutomator2",
            "appium:app": "./apps/product_registration.apk",
            "appium:appPackage": "br.com.pztec.estoque",
            "appium:appActivity": "br.com.pztec.estoque.Inicio",
            "appium:noReset": false,
            "appium:autoLaunch": true,
            "appium:newCommandTimeout": 240,
        },
    ],

    specs: ["./test/specs/productApp/*.js"],
};

const solarMarket = {
    ...main,
    capabilities: [
        {
            platformName: "Android",
            "appium:platformVersion": "13",
            "appium:deviceName": "AppiumAVD",
            "appium:deviceOrientation": "portrait",
            "appium:automationName": "UiAutomator2",
            "appium:app": "./apps/app-debug.apk",
            "appium:appPackage": "com.solarviewbusinessapp",
            "appium:appActivity": "com.solarviewbusinessapp.MainActivity",
            "appium:noReset": false,
            "appium:autoLaunch": true,
            "appium:newCommandTimeout": 240,
        },
    ],

    specs: ["./test/specs/solarMarket/*.js"],
};

exports.config =
    process.env.APP_ENV === "demoApp"
        ? demoApp
        : process.env.APP_ENV === "apiDemos"
        ? apiDemos
        : solarMarket;
