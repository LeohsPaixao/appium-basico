const mainConfig = require('./main');

const productApp = {
    capabilities: [
        {
            platformName: "Android",
            "appium:deviceOrientation": "portrait",
            "appium:automationName": "UiAutomator2",
            "appium:app": "./apps/product_registration.apk",
            "appium:appPackage": "br.com.pztec.estoque",
            "appium:appActivity": "br.com.pztec.estoque.Inicio",
            "appium:appWaitActivity": "br.com.pztec.estoque.ListaAssunto",
            "appium:appWaitDuration": 30000,
        },
    ],

    specs: ["./test/specs/productApp/*.js"],
};

const mergedConfig = { ...mainConfig, ...productApp };

module.exports = mergedConfig;
