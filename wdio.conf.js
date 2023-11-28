require('dotenv').config();

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const appPath = isGitHubActions ? process.env.APP_PATH_GITHUB_ACTIONS : process.env.APP_PATH;
const commandTimeout = isGitHubActions ? process.env.COMMAND_TIMEOUT_GITHUB : process.env.COMMAND_TIMEOUT

exports.config = {
    runner: process.env.APPIUM_SERVER || 'local',
    port: process.env.PORT || 4723,
    logLevel: 'info',
    framework: 'mocha',
    path: '/wd/hub',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 60000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    maxInstances: 1,
    exclude: [],
    services: ['appium'],
    reporters: ['allure'],
    reporterOptions: {
        allure: {
            outputDir: './allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        },
    },
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{

        "platformName": "Android",
        "appium:platformVersion": process.env.PLATFORM_VERSION,
        "appium:deviceName": process.env.DEVICE_NAME,
        "appium:deviceOrientation": "portrait",
        "appium:automationName": "UiAutomator2",
        "appium:app": appPath,
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": "com.wdiodemoapp.MainActivity",
        "appium:noReset": false,
        "appium:autoLaunch": true,
        'appium:newCommandTimeout': commandTimeout,
    }],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
}
