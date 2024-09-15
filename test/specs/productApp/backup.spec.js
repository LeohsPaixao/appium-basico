const { productGenerator } = require('../../support/helpers/productGenerator');
const ProductElements = require('./product/productElements');
const BackupElements = require('./backup/backupElements');

const elementsProduct = new ProductElements();
const elements = new BackupElements()

describe("-> Backup", () => {
    before(async () => await productGenerator(2));

    beforeEach(async () => {
        await elementsProduct.btnMenu().click();
        await elements.btnBackup().click();
    });


    it("Should be able to generate backup and send", async () => {
        await elements.btnGenerateBackupFile().click();
        await expect(elements.modalTitle()).toHaveText('Operation completed!');
        await elements.btnModalOk().click();
        await driver.pause(1000);

        const datafile = await elements.messageDataFile();
        const datafileText = await datafile.getText();

        await expect($(datafile)).toHaveText(datafileText);

        await elements.btnSend().click();
        await expect(elements.profileTabHost()).toBeDisplayed();
    });
})
