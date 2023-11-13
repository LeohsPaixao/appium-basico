describe('Swipe', () => {
    beforeEach( async () => {
        await $('~Swipe').click();
        await expect($('//android.widget.TextView[@text="Swipe horizontal"]')).toHaveText('Swipe horizontal');
    });

    it('Should be able to swipe for next item', () => {
        const { height, width } = driver.getWindowSize();
        console.log(height, width);
    })
})
