import type { Options } from '@wdio/types';
import dotenv from 'dotenv';
import { demoApp } from './test/support/desired/desiredNativeApp.js';
import { productApp } from './test/support/desired/desiredProductApp.js';

dotenv.config();

const baseConfig = process.env.APP_ENV === 'demoapp' ? demoApp : productApp;

export const config: Options.Testrunner = {
    ...baseConfig,
    runner: 'local',
    logLevel: 'info',
    path: '/',
    baseUrl: '',
    tsConfigPath: './tsconfig.json',
    port: 4723,
    bail: 0,
    waitforTimeout: 60000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    maxInstances: 1,
    exclude: [],
    services: ['appium'],
    reporters: ["allure"],
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000,
    },
};
