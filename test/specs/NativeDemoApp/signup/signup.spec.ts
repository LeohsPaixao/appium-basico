import SignupElements from './signup.page.js';

const method = new SignupElements();

describe('-> Sign up', () => {
  before(async () => {
    await method.visitLoginPage();
    await method.visitSignupPage();
  });

  it('Should not be able to sign in with invalid email', async () => {
    await method.fillSignUpForm('a@', '12345678', '12345678');
    await method.clickSignupButton();

    await method.validateInvalidEmailMessage();
  });

  it('Should not be able to sign in with invalid password', async () => {
    await method.fillSignUpForm('a@example.com', '123456', '123456');
    await method.clickSignupButton();

    await method.validateInvalidPasswordMessage();
  });

  it('Should not be able to sign in with mismatched password confirmation', async () => {
    await method.fillSignUpForm('a@example.com', '12345678', '123456');
    await method.clickSignupButton();

    await method.validateSamePasswordMessage();
  });

  it('Should be able to sign up successfully', async () => {
    await method.fillSignUpForm('a@example.com', '12345678', '12345678');
    await method.clickSignupButton();

    await method.validateSignupSucceededMessage();
  });
});
