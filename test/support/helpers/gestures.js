async function dragAndDrop(driver, sourceId, destinationId) {
    await driver.executeScript('gesture: dragAndDrop', [{ sourceId, destinationId }]);
}

module.exports = {
    dragAndDrop,
};
