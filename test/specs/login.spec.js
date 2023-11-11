describe('-> Login', () => {
    beforeEach( async () => {
        await $('~Login').click()
    })

    after( async () => {
        await driver.pause(1000)
        await driver.execute('mobile: terminateApp, { appId:  } ')
    })

    it('Should not be able to login with invalid credentials', async () => {
        await $('~input-email').addValue('a@')
        await $('~input-password').addValue('123456')
        await $('~button-LOGIN').click()

        await expect(
            $('//android.widget.TextView[@text="Please enter a valid email address"]')
        ).toHaveText('Please enter a valid email address')

        await expect(
            $('//android.widget.TextView[@text="Please enter at least 8 characters"]')
        ).toHaveText('Please enter at least 8 characters')
    })

    it('Should be able to complete the login', async () => {
        await $('~input-email').addValue('a@example.com')
        await $('~input-password').addValue('12345678')
        await $('~button-LOGIN').click()

        await expect(
            $('//android.widget.FrameLayout[@resource-id="android:id/content"]')
        ).toBeExisting()

        await $('//android.widget.Button[@resource-id="android:id/button1"]').click()
    })
})
