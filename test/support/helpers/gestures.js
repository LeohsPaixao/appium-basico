/**
 * Performs a drag and drop gesture on the app using Appium's executeScript method.
 *
 * @param {import('appium').Driver} driver - The Appium driver instance.
 * @param {string} sourceId - The element id to start the drag from.
 * @param {string} destinationId - The element id to drop the dragged element onto.
 *
 * @returns {Promise<void>} A promise that resolves when the drag and drop operation is completed.
 */
async function dragAndDrop(driver, sourceId, destinationId) {
    await driver.executeScript('gesture: dragAndDrop', [{ sourceId, destinationId }]);
}

/**
 * Performs a swipe gesture on a specific element using Appium's executeScript method.
 *
 * @param {import('appium').Driver} driver - The Appium driver instance.
 * @param {import('appium').WebElement} element - The element to perform the swipe gesture on.
 * @param {string} direction - The direction of the swipe gesture. It can be 'up', 'down', 'left', or 'right'.
 * @param {number} percentage - The percentage of the screen to swipe. For example, 0.5 would result in a half-screen swipe.
 *
 * @returns {Promise<void>} A promise that resolves when the swipe operation is completed.
 */
async function swipeElement(driver, element, direction, percentage) {
    const elementId = await element.elementId;

        await driver.executeScript('gesture: swipe', [{
            elementId,
            percentage,
            direction,
        }]
    );
}

/**
 * Performs a scroll gesture to bring a specific element into view within a scrollable view.
 *
 * @param {import('appium').Driver} driver - The Appium driver instance.
 * @param {string} scrollableView - The id of the scrollable view element.
 * @param {string} selector - The selector to identify the target element within the scrollable view.
 * @param {string} strategy - The strategy to use for locating the target element. It can be 'id', 'class name', 'accessibility id', etc.
 * @param {number} percentage - The percentage of the screen to scroll. For example, 0.5 would result in a half-screen scroll.
 * @param {string} direction - The direction of the scroll gesture. It can be 'up', 'down', 'left', or 'right'.
 * @param {number} maxCount - The maximum number of scroll attempts before giving up.
 *
 * @returns {Promise<void>} A promise that resolves when the scroll operation is completed or when the target element is found.
 */
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

/**
 * Performs a swipe gesture on the screen using Appium's performActions method.
 *
 * @param {import('appium').Driver} driver - The Appium driver instance.
 * @param {number} startX - The initial x-coordinate of the swipe gesture.
 * @param {number} startY - The initial y-coordinate of the swipe gesture.
 * @param {number} endX - The final x-coordinate of the swipe gesture.
 * @param {number} endY - The final y-coordinate of the swipe gesture.
 *
 * @returns {Promise<void>} A promise that resolves when the swipe operation is completed.
 */
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

/**
 * Performs a double tap gesture on a specific element using Appium's executeScript method.
 *
 * @param {import('appium').Driver} driver - The Appium driver instance.
 * @param {import('appium').WebElement} element - The element to perform the double tap gesture on.
 *
 * @returns {Promise<void>} A promise that resolves when the double tap operation is completed.
 */
async function doubleTap(driver, element) {
    const elementId = await element.elementId;

        await driver.executeScript('gesture: doubleTap', [{
            elementId
        }]
    );
}

/**
 * Performs a long press gesture on a specific element using Appium's executeScript method.
 *
 * @param {import('appium').Driver} driver - The Appium driver instance.
 * @param {import('appium').WebElement} element - The element to perform the long press gesture on.
 * @param {number} pressure - The pressure to apply during the long press gesture.
 * @param {number} duration - The duration of the long press gesture in milliseconds.
 *
 * @returns {Promise<void>} A promise that resolves when the long press operation is completed.
 */
async function longPress(driver, element, pressure, duration) {
    const elementId = await element.elementId;

    await driver.executeScript('gesture: longPress', [{
        elementId,
        pressure,
        duration,
    }]);
}

module.exports = {
    dragAndDrop,
    swipeElement,
    scrollIntoView,
    performSwipe,
    doubleTap,
    longPress,
};
