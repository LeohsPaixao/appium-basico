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

module.exports = main;
