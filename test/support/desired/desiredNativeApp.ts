export const demoApp = {
    capabilities: [
        {
            "appium:udid": process.env.APPIUM_UDID,
            "appium:app": "./apps/Android-NativeDemoApp-0.4.0.apk",
            "appium:appPackage": "com.wdiodemoapp",
            "appium:appActivity": "com.wdiodemoapp.MainActivity",
        },
    ],

    specs: ["./test/specs/NativeDemoApp/*.ts"],
};

