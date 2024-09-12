class LoginElements {
  loginPage = () => $('~Login');
  signupBar = () => $('//android.widget.TextView[@text="Sign up"]');
  fieldEmail = () => $('~input-email');
  fieldPassword = () => $('~input-password');
  fieldConfirmPassword = () => $('~input-repeat-password');
  btnLogin = () => $('~button-LOGIN');
  btnSignup = () => $('~button-SIGN UP');
  messageInvalidEmail = () => $('//android.widget.TextView[@text="Please enter a valid email address"]');
  messageInvalidPassword = () => $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
  messageSamePassword = () => $('//android.widget.TextView[@text="Please enter the same password"]');
  messageSignupSucceeded = () => $('//android.widget.TextView[@resource-id="android:id/message"]');
  messageLoginSucceeded = () => $('//android.widget.TextView[@resource-id="android:id/message"]');

  async fillSignUpForm(email, password, repeatPassword) {
    await this.fieldEmail().addValue(email);
    await this.fieldPassword().addValue(password);
    await this.fieldConfirmPassword().addValue(repeatPassword);
  }

  async fillLoginForm(email, password) {
    await this.fieldEmail().addValue(email);
    await this.fieldPassword().addValue(password);
  }
}

module.exports = LoginElements;