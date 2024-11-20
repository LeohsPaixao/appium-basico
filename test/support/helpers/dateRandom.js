const ProductElements = require('../../specs/productApp/product/productElements');//-

const getRandomDay = (min = 1, max = 30) => Math.floor(Math.random() * (max - min + 1)) + min;//-

const elements = new ProductElements();

/**
 * Selects a preferred date from a date picker interface within an iframe.
 *
 * @param {number} day - The index of the day to select from the date picker.
 *                        It should be a valid index within the available days.
 * @returns {Promise<void>} - A promise that resolves when the date selection is complete.
 *                            Throws an error if the selection process fails.
 */
module.exports.datePrefer = async (day) => {
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

/**
 * Selects a random date in the next month using the date picker UI.
 * 
 * This function performs the following steps:
 * 1. Clicks the date button to open the date picker.
 * 2. Waits for the date picker iframe to be displayed.
 * 3. Navigates to the next month.
 * 4. Selects a random day within the month.
 * 5. Confirms the selection by clicking the OK button.
 * 
 * @async
 * @function dateRandom
 * @throws {Error} If any step in the process fails or if the selector is not found.
 * @returns {Promise<void>} A promise that resolves when the date selection is complete.
 */
module.exports.dateRandom = async () => {
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