const InventoryElements = require('../../specs/productApp/report/reportElements');

const elements = new InventoryElements()

const pdfGenerator = async () => {
    await elements.btnPDFGenerator().click();
    await expect(elements.messageDataFile()).toHaveText(expect.stringContaining("generated in"));
}

module.exports = { pdfGenerator }
