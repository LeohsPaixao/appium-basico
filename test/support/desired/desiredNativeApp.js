// demoAppConfig.js
const mainConfig = require('./main');

const demoApp = {
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

const mergedConfig = { ...mainConfig, ...demoApp };

module.exports = mergedConfig;