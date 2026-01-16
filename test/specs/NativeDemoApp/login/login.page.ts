export default class LoginElements {
  elements = {
    loginPage: () => $('~Login'),
    signupBar: () => $('//android.widget.TextView[@text="Sign up"]'),
    fieldEmail: () => $('~input-email'),
    fieldPassword: () => $('~input-password'),
    fieldConfirmPassword: () => $('~input-repeat-password'),
    btnLogin: () => $('~button-LOGIN'),
    btnSignup: () => $('~button-SIGN UP'),
    messageInvalidEmail: () => $('//android.widget.TextView[@text="Please enter a valid email address"]'),
    messageInvalidPassword: () => $('//android.widget.TextView[@text="Please enter at least 8 characters"]'),
    messageSamePassword: () => $('//android.widget.TextView[@text="Please enter the same password"]'),
    messageSignupSucceeded: () => $('//android.widget.TextView[@resource-id="android:id/message"]'),
    messageLoginSucceeded: () => $('//android.widget.TextView[@resource-id="android:id/message"]'),
  }

  async fillSignUpForm(email: string, password: string, repeatPassword: string) {
    await this.elements.fieldEmail().addValue(email);
    await this.elements.fieldPassword().addValue(password);
    await this.elements.fieldConfirmPassword().addValue(repeatPassword);
  }

  async fillLoginForm(email: string, password: string) {
    await this.elements.fieldEmail().addValue(email);
    await this.elements.fieldPassword().addValue(password);
  }

  async visitLoginPage() {
    await this.elements.loginPage().click();
  }

  async visitSignupPage() {
    await this.elements.signupBar().click();
    await expect(this.elements.fieldConfirmPassword()).toBeExisting();
  }

  async clickSignupButton() {
    await this.elements.btnSignup().click();
  }

  async clickLoginButton() {
    await this.elements.btnLogin().click();
  }

  async validateInvalidEmailMessage() {
    await expect(this.elements.messageInvalidEmail()).toHaveText('Please enter a valid email address');
  }
  
  async validateInvalidPasswordMessage() {
    await expect(this.elements.messageInvalidPassword()).toHaveText('Please enter at least 8 characters');
  }

  async validateSamePasswordMessage() {
    await expect(this.elements.messageSamePassword()).toHaveText('Please enter the same password');
  }

  async validateSignupSucceededMessage() {
    await expect(this.elements.messageSignupSucceeded()).toHaveText('You successfully signed up!');
  }

  async validateLoginSucceededMessage() {
    await expect(this.elements.messageLoginSucceeded()).toHaveText('You are logged in!');
  }
}