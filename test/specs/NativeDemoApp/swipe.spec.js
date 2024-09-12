const gestures = require('../../support/helpers/gestures.js')
const SwipeElements = require('./swipe/swipeElements')

const elements = new SwipeElements();

describe('-> Swipe', () => {
    before(async () => {
        await elements.swipePage().click();
        await expect(elements.swipeText()).toHaveText('Swipe horizontal');
    });

    after(async () => {
        await driver.pause(1000);
    });

    it('Should not be able to swipe past carousel', async () => {

        await expect(elements.carousel()).toBeDisplayed();

        await gestures.swipeElement(driver, elements.carousel(), 'right', 50);

        await expect(elements.currentElement()).toBeDisplayed();
    })

    it('Should be able to swipe left', async () => {

        await expect(elements.carousel()).toBeDisplayed();

        await gestures.swipeElement(driver, elements.carousel(), 'left', 50);

        await expect(elements.targetElement()).toBeDisplayed();
    });

    it('Should be able to scroll to down', async () => {
        await expect(elements.swipeScreen()).toBeDisplayed();

        const screenId = await elements.swipeScreen().elementId;

        await gestures.scrollIntoView(driver, screenId, 'WebdriverIO logo', 'accessibility id', 50, 'up', 4);

        await expect(elements.webDriverLogo()).toBeDisplayed();
    })
});
