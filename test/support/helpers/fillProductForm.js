const ProductElements = require('../../specs/productApp/product/productElements');

const elements = new ProductElements();

const getRandomCode = (min = 500, max = 99999) => Math.floor(Math.random() * (max - min + 1)) + min;

const fillProductForm = async () => {
    const code = getRandomCode().toString();

    const formFields = [
        { element: elements.inputCode(), value: code },
        { element: elements.inputDescription(), value: "Describe" },
        { element: elements.inputUnit(), value: "5" },
        { element: elements.inputQuantity(), value: "14" },
        { element: elements.inputUnitPrice(), value: "2.98" },
        { element: elements.inputLote(), value: "2" }
    ];

    try {
        for (const field of formFields) {
            await field.element.addValue(field.value);
        }
    } catch (error) {
        throw new Error('Error filling product form:', error);
    }
};

module.exports = { fillProductForm };
