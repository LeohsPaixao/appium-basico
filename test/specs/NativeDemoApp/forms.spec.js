const FormsElements = require('./forms/formsElements');

const elements = new FormsElements();

describe('-> Forms', () => {
    before(async () => {
        await elements.formPage().click();
        await expect(elements.formScreen()).toBeDisplayed();
    });

    after(async () => await driver.pause(1000));

    it('Should be able to type something in the first field', async () => {
        await elements.inputText().addValue('Type something');

        await expect(elements.inputTextResult()).toHaveText('Type something');
    });

    it('Should be able to turn off the switch', async () => {
        await expect(elements.switchText()).toHaveText(expect.stringContaining('ON'));

        await elements.switch().click();

        await expect(elements.switchText()).toHaveText(expect.stringContaining('OFF'));
    });

    it('Should be able to choose an option in the dropdown', async () => {
        await elements.dropdown().click();

        await expect(elements.containerOptions()).toBeDisplayed();

        await elements.optionOne().click();

        await expect(elements.placeholderDropdown()).toHaveText('Appium is awesome');
    });

    it('Should be able to click on the Inactive button', async () => {
        await elements.buttonInactive().click();
    });

    it('Should be able to click on the Active button', async () => {
        await elements.buttonActive().click();
        await expect(elements.messageButtonClick()).toHaveText('This button is active');
    });
});
