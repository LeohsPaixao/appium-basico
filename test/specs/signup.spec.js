describe('-> Sign up', () => {
    beforeEach( async () => {
        await $('~Login').click()
        await $('//android.widget.TextView[@text="Sign up"]').click()
        await expect(
            $('~input-repeat-password')
        ).toBeExisting()
    })

    after( async () => {
        await driver.pause(1000)
    })

    it('Should not be able to sign in with email invalid', async () => {
        await $('~input-email').addValue('a@')
        await $('~input-password').addValue('12345678')
        await $('~input-repeat-password').addValue('12345678')
        await $('~button-SIGN UP').click()

        await expect(
            $('//android.widget.TextView[@text="Please enter a valid email address"]')
        ).toHaveText('Please enter a valid email address')
    })

    it('Should not be able to sign in with password invalid', async () => {
        await $('~input-email').addValue('a@example.com')
        await $('~input-password').addValue('123456')
        await $('~input-repeat-password').addValue('12345678')
        await $('~button-SIGN UP').click()

        await expect(
            $('//android.widget.TextView[@text="Please enter at least 8 characters"]')
        ).toHaveText('Please enter at least 8 characters')

        await expect(
            $('//android.widget.TextView[@text="Please enter the same password"]')
        ).toHaveText('Please enter the same password')
    })

    it('Should not be able to sign in with password confirm invalid', async () => {
        await $('~input-email').addValue('a@example.com')
        await $('~input-password').addValue('12345678')
        await $('~input-repeat-password').addValue('123456')
        await $('~button-SIGN UP').click()

        await expect(
            $('//android.widget.TextView[@text="Please enter the same password"]')
        ).toHaveText('Please enter the same password')
    })

    it('Should be able to sign in', async () => {
        await $('~input-email').addValue('a@example.com')
        await $('~input-password').addValue('12345678')
        await $('~input-repeat-password').addValue('12345678')
        await $('~button-SIGN UP').click()

        await expect(
            $('//android.widget.FrameLayout[@resource-id="android:id/content"]')
        ).toBeExisting()
    })
})
