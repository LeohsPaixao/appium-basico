const LoginElements = require('./loginAndSignup/loginElements')

const elements = new LoginElements();

describe('-> Sign up', () => {
    before( async () => {
        await elements.loginPage().click()
        await elements.signupBar().click()
        await expect(elements.fieldConfirmPassword()).toBeExisting()
    })

    after(async () => await driver.pause(1000))

    it('Should not be able to sign in with invalid email', async () => {
        await elements.fillSignUpForm('a@', '12345678', '12345678');
        await elements.btnSignup().click();

        await expect(elements.messageInvalidEmail()).toHaveText('Please enter a valid email address');
    })

    it('Should not be able to sign in with invalid password', async () => {
        await elements.fillSignUpForm('a@example.com', '123456', '123456');
        await elements.btnSignup().click();

        await expect(elements.messageInvalidPassword()).toHaveText('Please enter at least 8 characters');
    })

    it('Should not be able to sign in with mismatched password confirmation', async () => {
        await elements.fillSignUpForm('a@example.com', '12345678', '123456');
        await elements.btnSignup().click();

        await expect(elements.messageSamePassword()).toHaveText('Please enter the same password')
    })

    it('Should be able to sign up successfully', async () => {
        await elements.fillSignUpForm('a@example.com', '12345678', '12345678');
        await elements.btnSignup().click();

        await expect(elements.messageSignupSucceeded()).toHaveText('You successfully signed up!')
    })
})
