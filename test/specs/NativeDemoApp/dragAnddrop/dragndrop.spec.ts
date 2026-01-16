import DraggableElements from './dragndrop.page.js';

const method = new DraggableElements();

describe('-> Drag and Drop', () => {
    before(async () => {
        await method.visit();
    });

    it('Should not be able to drag an item and drop it in the wrong area', async () => {
        await method.validateItemsLeft();
        await method.dragNDrogItem();
        await method.validateItemsLeft();
    });

    it('Should not be able to restart the drag and drop', async () => {
        await method.validateItemAndZoneLeft1Displayed();
        await method.dragItemLeft1ToZoneLeft1();
        await method.validateItemAndZoneLeft1NotDisplayed();
        await method.clickRestart();
        await method.validateItemAndZoneLeft1Displayed();
    });

    it('Should be able to complete the dragged', async () => {
        await method.completeDragAndDrop();
        await method.validateSuccessMessage();
        await method.validateRetryButtonDisplayed();
        await method.clickRetryButton();
        await method.validateItemAndZoneLeft1AfterRetry();
    });
});
