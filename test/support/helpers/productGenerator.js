const { fillProductForm } = require("./fillProductForm");
const { dateRandom } = require("./dateRandom");
const ProductElements = require("../../specs/productApp/product/productElements");

const elements = new ProductElements();

const productGenerator = async (amount) => {
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

module.exports = { productGenerator };
