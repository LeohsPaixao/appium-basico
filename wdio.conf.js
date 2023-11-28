const demoApp = {
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
    specs: [
        "./test/specs/**/*.js"
    ],
    capabilities: [{

        "platformName": "Android",
        "appium:platformVersion": "13",
        "appium:deviceName": "AppiumAVD",
        "appium:deviceOrientation": "portrait",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": "com.wdiodemoapp.MainActivity",
        "appium:noReset": false,
        "appium:autoLaunch": true,
        "appium:newCommandTimeout": 240,
    }],
    mochaOpts: {
        ui: "bdd",
        timeout: 600000
    },
}

const apiDemos = {
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
    specs: [
        "./test/specs/**/*.js"
    ],
    capabilities: [{

        "platformName": "Android",
        "appium:platformVersion": "13",
        "appium:deviceName": "AppiumAVD",
        "appium:deviceOrientation": "portrait",
        "appium:automationName": "UiAutomator2",
        "appium:app": "./apps/ApiDemos-debug.apk",
        "appium:appPackage": "io.appium.android.apis",
        "appium:appActivity": ".ApiDemos",
        "appium:noReset": false,
        "appium:autoLaunch": true,
        "appium:newCommandTimeout": 240,
    }],
    mochaOpts: {
        ui: "bdd",
        timeout: 600000
    },
};

exports.config = process.env.APP_ENV === "demoApp" ? demoApp : apiDemos;
