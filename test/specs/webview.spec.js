const gestures = require('../support/helpers/gestures')

describe('-> Webview', () => {
    before( async () => {
        await $('~Webview').click();
        await driver.pause(5000); // Como é Webview, leva um tempo para carregar a tela
    })

    after(() => {
        driver.pause(1000);
    })

    it('Should be able to navigate for Get Started and return', async () => {
        // Coordenadas iniciais e finais para o swipe
        const startX = 50;
        const startY = 2500;
        const endX = 50;
        const endY = 1500;

        // Realizar o swipe para cima usando performActions
        await gestures.performSwipe(driver, startX, startY, endX, endY);

        // Pagina do Get Started
        const button_GetStarted = await $('~Get Started');
        await button_GetStarted.click();

        const Breadcrumbs = await $('//android.view.View[@text="Breadcrumbs"]');
        await expect(Breadcrumbs).toBeDisplayed();

        const home = await $('~WebdriverIO');
        await home.click();

        const home_screen = await $('//android.view.View[@resource-id="__docusaurus"]');
        await expect(home_screen).toBeDisplayed();
    })

    it('Should be able to chance the colr white for black ', async () => {
        const navigation_bar = await $('//android.widget.Button[@text="Toggle navigation bar"]');
        await navigation_bar.click();

        driver.pause(3000);

        const modeColor = await $('//android.widget.Button[@text="Switch between dark and light mode (currently light mode)"]');
        await modeColor.click();

        await expect(modeColor).toHaveTextContaining('dark mode');

        const Cnavigation_bar = await $('//android.widget.Button[@text="Close navigation bar"]');
        await Cnavigation_bar.click();
    })

    it('Should be able to search something', async () => {
        const button_Search = await $('//android.widget.Button[@text="Search"]');
        await button_Search.click();

        const search = await $('//android.widget.EditText[@resource-id="docsearch-input"]');
        await expect(search).toBeDisplayed();

        await search.addValue('Appium');

        const protocols = await $('~Appium');
        await protocols.click();

        const appium_screen = await $('//android.widget.TextView[@text="Appium"]');
        await expect(appium_screen).toBeDisplayed();

    })
})
