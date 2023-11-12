describe('-> forms', () => {
    beforeEach( async () => {
        await $('~Forms').click();
        await expect($('//android.widget.TextView[@text="Form components"]')).toBeExisting();
    })

    after( async () => {
        await driver.pause(1000);
    })

    it('Should be able to type something the first field', async () => {
        await $('~text-input').addValue('Type something');
        await expect($('~input-text-result')).toHaveText('Type something');
    })

    it('Should be able to turn off the switch', async () => {
        await expect($('~switch-text')).toHaveTextContaining('ON');
        await $('~switch').click();
        await expect($('~switch-text')).toHaveTextContaining('OFF');
    })

    it('Should be able to choose an option in dropdown', async () => {
        await $('~Dropdown').click();
        await expect(
            $('//android.widget.ListView[@resource-id="com.wdiodemoapp:id/select_dialog_listview"]')
        ).toBeExisting()

        await $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]')
            .click();
        await expect($('//android.widget.EditText[@text="Appium is awesome"]')).toHaveText('Appium is awesome');
    })
})
