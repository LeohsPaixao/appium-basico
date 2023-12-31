async function dragAndDrop(driver, sourceId, destinationId) {
    await driver.executeScript('gesture: dragAndDrop', [{ sourceId, destinationId }]);
}

async function swipeElement(driver, element, direction, percentage) {
    const elementId = element.elementId;

        await driver.executeScript('gesture: swipe', [{
            elementId,
            percentage,
            direction,
        }]
    );
}

async function scrollIntoView(driver, scrollableView, selector, strategy, percentage, direction, maxCount) {
    await driver.executeScript('gesture: scrollElementIntoView', [{
            scrollableView,
            selector,
            strategy,
            percentage,
            direction,
            maxCount,
        }]
    );
}

async function performSwipe(driver, startX, startY, endX, endY) {
    await driver.performActions([
        {
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 1000, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: 1000, x: endX, y: endY },
                { type: 'pointerUp', button: 0 },
            ],
        },
    ]);

    await driver.pause(2500);
}

async function doubleTap(driver, element) {
    const elementId = element.elementId;

        await driver.executeScript('gesture: doubleTap', [{
            elementId
        }]
    );
}

async function longPress(driver, element, pressure, duration) {
    const elementId = element.elementId;

        await driver.executeScript('gesture: longPress', [{
            elementId,
            pressure,
            duration,
        }]
    );
}

module.exports = {
    dragAndDrop,
    swipeElement,
    scrollIntoView,
    performSwipe,
    doubleTap,
    longPress,
};
