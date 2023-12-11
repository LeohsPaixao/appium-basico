const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const connectTimeout = isGitHubActions ? 120000 : 60000
const retryTimeout = isGitHubActions ? 200000 : 120000

const main = {
    runner: "local",
    port: 4723,
    logLevel: "info",
    framework: "mocha",
    path: "/wd/hub",
    bail: 0,
    baseUrl: "",
    waitforTimeout: connectTimeout,
    connectionRetryTimeout: retryTimeout,
    connectionRetryCount: 2,
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
