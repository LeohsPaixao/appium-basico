const { datePrefer } = require('../../support/helpers/dateRandom');
const { pdfGenerator } = require('../../support/helpers/pdfGenerator');
const ProductElements = require('./product/productElements');
const ReportElements = require('./report/reportElements');

const elements = new ReportElements();
const elementsProduct = new ProductElements();

describe("-> Report - Stock Entries", () => {
    beforeEach(async () => {
        await driver.terminateApp("br.com.pztec.estoque");
        await driver.activateApp("br.com.pztec.estoque");
        await elementsProduct.btnMenu().click();
        await elements.btnDashboard().click();
        await elements.btnStockEntry().click();
    });

    afterEach(async () => await driver.pause(1000));

    it("Should be able to view of the documents PDF", async () => {
        await elements.startDate().click();
        await datePrefer(5); // Coloca um dia a frente, ou seja, 6

        await elements.finalDate().click();
        await datePrefer(15); // Coloca um dia a frente, ou seja, 16

        await elements.startDate().waitForDisplayed();
        await elements.finalDate().waitForDisplayed();
        const dateText = await elements.startDate().getText();
        const dateText2 = await elements.finalDate().getText();
        await expect(elements.startDate()).toHaveText(dateText);
        await expect(elements.finalDate()).toHaveText(dateText2);

        await pdfGenerator();
        await elements.btnOpenPDF().click();
        await expect(elements.contentDocsOpened()).toBeDisplayed();
    });

    it("Should not be able to view of the PDF document if it has the previous date", async () => {
        await elements.startDate().click();
        await datePrefer(5); // Coloca um dia a frente, ou seja, 6

        await elements.finalDate().click();
        await datePrefer(4); // Coloca um dia a frente, ou seja, 5

        await elements.startDate().waitForDisplayed();
        await elements.finalDate().waitForDisplayed();
        const dateText = await elements.startDate().getText();
        const dateText2 = await elements.finalDate().getText();
        await expect(elements.startDate()).toHaveText(dateText);
        await expect(elements.finalDate()).toHaveText(dateText2);

        await elements.btnPDFGenerator().click();
        await expect(elements.modalContent()).toBeDisplayed();
        await expect(elements.modalMessage()).toHaveText("The end date can not be less than the starting date.");
    });

    it("Should be able to send the documents PDF", async () => {
        await elements.startDate().click();
        await datePrefer(5); // Coloca um dia a frente, ou seja, 6

        await elements.finalDate().click();
        await datePrefer(15); // Coloca um dia a frente, ou seja, 16

        await elements.startDate().waitForDisplayed();
        await elements.finalDate().waitForDisplayed();
        const dateText = await elements.startDate().getText();
        const dateText2 = await elements.finalDate().getText();
        await expect(elements.startDate()).toHaveText(dateText);
        await expect(elements.finalDate()).toHaveText(dateText2);

        await pdfGenerator();
        await elements.btnSendEmail().click();
        await expect(elements.profileTabHost()).toBeDisplayed();
    });
})
