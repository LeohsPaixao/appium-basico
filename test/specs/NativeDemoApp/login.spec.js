const LoginElements = require('./loginAndSignup/loginElements')

const elements = new LoginElements();

describe('-> Login', () => {
    before(async () => await elements.loginPage().click())

    after(async () => await driver.pause(1000));

    it('Should not be able to login with invalid email', async () => {
        await elements.fillLoginForm('a@', '12345678')
        await elements.btnLogin().click()

        await expect(elements.messageInvalidEmail()).toHaveText('Please enter a valid email address')
    })

    it('Should not be able to login with password invalid', async () => {
        await elements.fillLoginForm('example@example.com', '123');
        await elements.btnLogin().click();

        await expect(elements.messageInvalidPassword()).toHaveText('Please enter at least 8 characters')
    })

    it('Should be able to complete the login', async () => {
        await elements.fillLoginForm('example@example.com', '12345678');
        await elements.btnLogin().click()

        await expect(elements.messageLoginSucceeded()).toHaveText('You are logged in!')
    })
})
