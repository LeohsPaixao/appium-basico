/**
 * Performs a back screen action on the app using Appium driver.
 * This function simulates a swipe from the center of the screen to the right,
 * effectively going back to the previous screen.
 *
 * @param {import('appium').Driver} driver - The Appium driver instance.
 * @returns {Promise<void>} A promise that resolves when the back screen action is completed.
 */
module.exports.backScreen = async (driver) => {
    await driver.performActions([
        {
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 1000, x: 50, y: 1500 },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: 1000, x: 500, y: 1500 },
                { type: 'pointerUp', button: 0 },
            ],
        },
    ]);

    await driver.pause(2500);
}

