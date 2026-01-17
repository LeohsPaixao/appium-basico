import LoginElements from './login.page.js';

const method = new LoginElements();

describe('-> Login', () => {
  before(async () => await method.visitLoginPage());

  it('Should not be able to login with an invalid email', async () => {
    await method.fillLoginForm('a@', '12345678');
    await method.clickLoginButton();

    await method.validateInvalidEmailMessage();
  });

  it('Should not be able to login with an invalid password', async () => {
    await method.fillLoginForm('example@example.com', '123');
    await method.clickLoginButton();

    await method.validateInvalidPasswordMessage();
  });

  it('Should be able to complete the login', async () => {
    await method.fillLoginForm('example@example.com', '12345678');
    await method.clickLoginButton();

    await method.validateLoginSucceededMessage();
  });
});
