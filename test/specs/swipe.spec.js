const gestures = require('../support/helpers/gestures.js')

describe('-> Swipe', () => {
    before(async () => {
        await $('~Swipe').click();
        await expect($('//android.widget.TextView[@text="Swipe horizontal"]')).toHaveText('Swipe horizontal');
    });

    after(async () => {
        await driver.pause(1000);
    });

    it('Should not be able to swipe past carousel', async () => {
        // Elemento alvo para verificar após o swipe
        const targetElement = await $('//android.widget.TextView[@text="GREAT COMMUNITY"]');
        const carousel = await $("~Carousel");

        // Ensure elements are displayed
        await expect(carousel).toBeDisplayed();
        await expect(targetElement).not.toBeDisplayed(); // Ensure the target element is not visible initially

        // Perform a right swipe on Carousel
        await gestures.swipeElement(driver, carousel, 'right', 50);

        // Verifica se o elemento alvo está visível após o swipe
        await expect(targetElement).not.toBeDisplayed();
    })

    it('Should be able to swipe left', async () => {
        // Elemento alvo para verificar após o swipe
        const targetElement = await $('//android.widget.TextView[@text="GREAT COMMUNITY"]');
        const carousel = await $("~Carousel");

        // Ensure elements are displayed
        await expect(carousel).toBeDisplayed();
        await expect(targetElement).not.toBeDisplayed(); // Ensure the target element is not visible initially

        // Perform a left swipe on Carousel
        await gestures.swipeElement(driver, carousel, 'left', 50);

        // Verifica se o elemento alvo está visível após o swipe
        await expect(targetElement).toBeDisplayed();
    });

    it('Should be able to scroll to down', async () => {
        const targetElement = await $('~WebdriverIO logo')
        const screen = await $('~Swipe-screen');

        await expect(targetElement).not.toBeDisplayed();
        await expect(screen).toBeDisplayed();

        const screenId = screen.elementId;

        await gestures.scrollIntoView(driver, screenId, 'WebdriverIO logo', 'accessibility id', 50, 'up', 4);

        await expect(targetElement).toBeDisplayed();
    })
});
