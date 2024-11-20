const { fillProductForm } = require("./fillProductForm");
const { dateRandom } = require("./dateRandom");
const ProductElements = require("../../specs/productApp/product/productElements");

const elements = new ProductElements();

/**
 * This function generates a specified amount of new products in the application.
 *
 * @param {number} amount - The number of products to generate.
 * @throws Will throw an error if there's an issue with generating the products.
 * @returns {Promise<void>} - Returns a promise that resolves when all products have been generated.
 */
module.exports.productGenerator = async (amount) => {
    try {
        for (let i = 0; i < amount; i++) {
            await elements.btnNewProduct().waitForDisplayed();

            await elements.btnNewProduct().click();

            await fillProductForm();
            await dateRandom();

            driver.pause(500);

            await elements.btnSaveProduct().click();
        }
    } catch (error) {
        throw new Error('Error in productGenerator:', error);
    }
};