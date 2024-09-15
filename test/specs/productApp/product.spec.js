const { dateRandom } = require('../../support/helpers/dateRandom');
const { fillProductForm } = require('../../support/helpers/fillProductForm');
const { productGenerator } = require('../../support/helpers/productGenerator');
const ProductElements = require('./product/productElements');

const elements = new ProductElements();

describe('-> Product', () => {
    context('Existing Product', () => {
        beforeEach(async () => {
            await driver.terminateApp('br.com.pztec.estoque');
            await driver.activateApp('br.com.pztec.estoque');
            await productGenerator(1);
        });

        afterEach(async () => await driver.pause(2000));

        it('Should be able to remove a product', async () => {
            await expect(elements.tableProduct()).toBeDisplayed();

            await elements.btnRemoveProduct().click();

            await expect(elements.modalMessage()).toBeDisplayed();

            await elements.modalBtnYes().click();

            await expect(elements.tableProduct()).not.toBeDisplayed();
        });

        it('Should be able to search by ID', async () => {
            await elements.btnSearch().click();
            await elements.inputSearch().addValue('2');

            await expect(elements.tableProduct()).toBeDisplayed();
            await expect(elements.prodId()).toHaveText('2');
        });
    });

    context('New Product', () => {
        beforeEach(async () => {
            await driver.terminateApp('br.com.pztec.estoque');
            await driver.activateApp('br.com.pztec.estoque');
            await elements.btnNewProduct().waitForDisplayed();

            await elements.btnNewProduct().click();
        });

        afterEach(async () => await driver.pause(2000));

        it('Should not be able to save a new product without entering the mandatory data', async () => {
            await elements.btnSaveProduct().click();

            await expect(elements.screenNewProduct()).toBeDisplayed();
        });

        it('Should be able to save a new product', async () => {
            await fillProductForm();
            await dateRandom();

            await elements.btnSaveProduct().click();

            await expect(elements.tableProduct()).toBeDisplayed();
        });

        it('Should be able to edit a product', async () => {
            await fillProductForm();
            await dateRandom();

            await elements.btnSaveProduct().click();
            await expect(elements.tableProduct()).toBeDisplayed();
            await elements.btnEditProduct().click();

            await elements.inputDescription().clearValue();
            await elements.inputDescription().addValue('NEW DESCRIPTION');

            await expect(elements.inputDescription()).toHaveText('NEW DESCRIPTION');
        });

        it('Should be able to increase the number of products', async () => {
            await fillProductForm();
            await dateRandom();

            await elements.btnSaveProduct().click();
            await expect(elements.tableProduct()).toBeDisplayed();
            await elements.btnIncreaseQtnProduct().click();

            await expect(elements.titleScreenQtnProduct()).toHaveText('Increment stock');

            await elements.inputQtnEntrance().addValue('2');
            await elements.inputReason().addValue('I bought new stock');
            await elements.inputRef().addValue('document');

            await elements.btnSaveQtnProduct().click();

            await expect(elements.inputQuantity()).toHaveText(expect.stringContaining('16'));
        });

        it('Should be able to decrease the number of products', async () => {
            await fillProductForm();
            await dateRandom();

            await elements.btnSaveProduct().click();
            await expect(elements.tableProduct()).toBeDisplayed();
            await elements.btnDecreaseQtnProduct().click();

            await expect(elements.titleScreenQtnProduct()).toHaveText('Decrease stock');

            await elements.inputQtnOut().addValue('2');
            await elements.inputReason().addValue('I sold stock');
            await elements.inputRef().addValue('document');

            await elements.btnSaveQtnProduct().click();

            await expect(elements.inputQuantity()).toHaveText(expect.stringContaining('12'));
        });
    });
});
