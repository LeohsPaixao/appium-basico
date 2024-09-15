import type { Options } from '@wdio/types';
const demoapp = require('./test/support/desired/desiredNativeApp');
const productapp = require('./test/support/desired/desiredProductApp');

const baseConfig = process.env.APP_ENV === "demoapp" ? demoapp : productapp;

export const config: Options.Testrunner = {
    ...baseConfig,
    runner: 'local',
    port: 4723,
    logLevel: 'info',
    path: '/',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 60000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    maxInstances: 1,
    exclude: [],
    services: ['appium'],
    reporters: ["allure"],
    reporterOptions: {
        allure: {
            outputDir: "./allure-results",
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        },
    },
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000,
    },
}
