const InventoryElements = require('../../specs/productApp/report/reportElements');

const elements = new InventoryElements()

/**
* This function generates a PDF report based on the current inventory data.
*
* @function pdfGenerator
* @returns {Promise<void>} - A promise that resolves when the PDF generation process is complete.
*
* @example
* await pdfGenerator();
*
* @see {@link https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/appium-selectors.md|Appium Selectors}
* @see {@link https://jestjs.io/docs/en/expect#tohavetext|Jest expect().toHaveText()}
*/
module.exports.pdfGenerator = async () => {
    await elements.btnPDFGenerator().click();
    await expect(elements.messageDataFile()).toHaveText(expect.stringContaining("generated in"));
}
