const { pdfGenerator } = require('../../support/helpers/pdfGenerator');
const ProductElements = require('./product/productElements');
const ReportElements = require('./report/reportElements');

const elements = new ReportElements();
const elementsProduct = new ProductElements();

describe("-> Repoter - Inventory", () => {
    beforeEach(async () => {
        await driver.terminateApp("br.com.pztec.estoque");
        await driver.activateApp("br.com.pztec.estoque");
        await elementsProduct.btnMenu().click();
        await elements.btnDashboard().click();
        await elements.btnInventory().click();
    });

    afterEach(async () => {
        await driver.pause(2000);
    });

    it("Should be able to view the pdf of the inventory data", async () => {
        await pdfGenerator();

        await elements.btnOpenPDF().click();
        await expect(elements.titleDocsOpened()).toHaveText('inventory.pdf');
        await expect(elements.contentDocsOpened()).toBeDisplayed();
    });

    it("Should be able to send the pdf of the inventory data", async () => {
        await pdfGenerator();

        await elements.btnSendEmail().click();
        await expect(elements.profileTabHost()).toBeDisplayed();
    });
})
