// demoAppConfig.js
const mainConfig = require('./main');

const demoApp = {
    capabilities: [
        {
            platformName: "Android",
            "appium:deviceOrientation": "portrait",
            "appium:automationName": "UiAutomator2",
            "appium:app": "./apps/Android-NativeDemoApp-0.4.0.apk",
            "appium:appPackage": "com.wdiodemoapp",
            "appium:appActivity": "com.wdiodemoapp.MainActivity",
        },
    ],

    specs: ["./test/specs/NativeDemoApp/*.js"],
};

const mergedConfig = { ...mainConfig, ...demoApp };

module.exports = mergedConfig;
