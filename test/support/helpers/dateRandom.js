const ProductElements = require('../../specs/productApp/product/productElements');

const getRandomDay = (min = 1, max = 30) => Math.floor(Math.random() * (max - min + 1)) + min;

const elements = new ProductElements();

const dateRandom = async () => {
    try {
        await elements.btnDate().click();

        await expect(elements.iframeDate()).toBeDisplayed();

        await elements.btnNexMonth().click();

        const number = await getRandomDay();

        const selectors = await $$("android.view.View");
        const selector = selectors[number];

        if (selector) {
            await selector.click();
        } else {
            throw new Error('Selector not found');
        }

        await elements.btnOkIframeDate().click();
    } catch (error) {
        throw new Error('Error in dateRandom:', error);
    }
};

const datePrefer = async (day) => {
    try {
        await expect(elements.iframeDate()).toBeDisplayed();

        await elements.btnNexMonth().click();

        const selectors = await $$("android.view.View");
        const selector = selectors[day];

        if (selector) {
            await selector.click();
        } else {
            throw new Error('Selector not found');
        }

        await elements.btnOkIframeDate().click();
    } catch (error) {
        throw new Error('Error in datePrefer:', error);
    }
};

module.exports = { dateRandom, datePrefer };
