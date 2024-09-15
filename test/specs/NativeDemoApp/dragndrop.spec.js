const gestures = require('../../support/helpers/gestures.js');
const DraggableElements = require('./dragAnddrop/dragndropElement');

const elements = new DraggableElements();

describe('-> dragndrop', () => {
    before(async () => {
        await elements.dragndropPage().click();
        await expect(elements.dragndropScreen()).toBeDisplayed();
    });

    it('Should not be able to drag an item and drop it in the wrong area', async () => {
        await expect(elements.itemLeft2()).toBeDisplayed();
        await expect(elements.zoneLeft1()).toBeDisplayed();

        const itemId = await elements.itemLeft2().elementId;
        const zoneId = await elements.zoneLeft1().elementId;

        await gestures.dragAndDrop(driver, itemId, zoneId);

        await expect(elements.itemLeft2()).toBeDisplayed();
        await expect(elements.zoneLeft1()).toBeDisplayed();
    });

    it('Should not be able to restart the drag and drop', async () => {

        await expect(elements.itemLeft1()).toBeDisplayed();
        await expect(elements.zoneLeft1()).toBeDisplayed();

        const itemId = await elements.itemLeft1().elementId;
        const zoneId = await elements.zoneLeft1().elementId;

        await gestures.dragAndDrop(driver, itemId, zoneId);

        await expect(elements.itemLeft1()).not.toBeDisplayed();
        await expect(elements.zoneLeft1()).not.toBeDisplayed();

        await elements.restart().click();

        await expect(elements.itemLeft1()).toBeDisplayed();
        await expect(elements.zoneLeft1()).toBeDisplayed();
    });

    it('Should be able to complete the dragged', async () => {
        const items = [
            await elements.itemLeft1(),
            await elements.itemLeft2(),
            await elements.itemLeft3(),
            await elements.itemRight1(),
            await elements.itemRight2(),
            await elements.itemRight3(),
            await elements.itemCenter1(),
            await elements.itemCenter2(),
            await elements.itemCenter3()
        ];

        const zones = [
            await elements.zoneLeft1(),
            await elements.zoneLeft2(),
            await elements.zoneLeft3(),
            await elements.zoneRight1(),
            await elements.zoneRight2(),
            await elements.zoneRight3(),
            await elements.zoneCenter1(),
            await elements.zoneCenter2(),
            await elements.zoneCenter3()
        ];

        for (let i = 0; i < items.length; i++) {
            const itemId = await items[i].elementId;
            const zoneId = await zones[i].elementId;
            await gestures.dragAndDrop(driver, itemId, zoneId);
        }

        await expect(elements.messageSuccess()).toHaveText('Congratulations');

        await expect(elements.retryButton()).toBeDisplayed();
        await elements.retryButton().click();

        await expect(await elements.itemLeft1()).toBeDisplayed();
        await expect(await elements.zoneLeft1()).toBeDisplayed();
    });
});
