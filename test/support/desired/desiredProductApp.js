const productApp = {
    capabilities: [
        {
            platformName: "Android",
            "appium:automationName": "uiautomator2",
            "appium:autoGrantPermissions": true,
            "appium:autoLaunch": true,
            "appium:newCommandTimeout": 3600,
            "appium:appWaitDuration": 30000,
            "appium:app": "./apps/product_registration.apk",
            "appium:appPackage": "br.com.pztec.estoque",
            "appium:appActivity": "br.com.pztec.estoque.Inicio",
            "appium:appWaitActivity": "br.com.pztec.estoque.ListaAssunto",
        },
    ],

    specs: ["./test/specs/productApp/*.js"],
};

module.exports = productApp;
