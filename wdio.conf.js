exports.config = {
    runner: 'local',
    port: 4723,
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
    reporters: ['spec'],
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{

        "platformName": "Android",
        "appium:platformVersion": "13",
        "appium:deviceName": "Pixel 7 Pro API 33",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": "com.wdiodemoapp.MainActivity",
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
    }],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
}
