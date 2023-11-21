async function dragAndDrop(driver, sourceId, destinationId) {
    await driver.executeScript('gesture: dragAndDrop', [{ sourceId, destinationId }]);
}

async function swipeElement(driver, element, direction, percentage) {
    const elementId = element.elementId;

    await driver.executeScript('gesture: swipe', [{
        elementId,
        percentage,
        direction,
    }]);
}

async function scrollIntoView(driver, scrollableView, selector, strategy, percentage, direction, maxCount) {
    await driver.executeScript('gesture: scrollElementIntoView', [{
        scrollableView,
        selector,
        strategy,
        percentage,
        direction,
        maxCount,
    }]);
}

module.exports = {
    dragAndDrop,
    swipeElement,
    scrollIntoView,
};
