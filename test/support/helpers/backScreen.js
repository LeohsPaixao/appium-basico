const backScreen = async (driver) => {
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

module.exports = { backScreen };
