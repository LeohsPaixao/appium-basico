const demoApp = {
    capabilities: [
        {
            platformName: "Android",
            "appium:automationName": "uiautomator2",
            "appium:autoGrantPermissions": true,
            "appium:noReset": false,
            "appium:autoLaunch": true,
            "appium:newCommandTimeout": 3600,
            "appium:appWaitDuration": 30000,
            "appium:app": "./apps/Android-NativeDemoApp-0.4.0.apk",
            "appium:appPackage": "com.wdiodemoapp",
            "appium:appActivity": "com.wdiodemoapp.MainActivity",
        },
    ],

    specs: ["./test/specs/NativeDemoApp/*.js"],
};

module.exports = demoApp;
