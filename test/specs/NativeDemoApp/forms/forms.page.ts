export default class FormsElements {
  elements = {
    formPage: () => $('~Forms'),
    formScreen: () => $('~Forms-screen'),
    inputText: () => $('~text-input'),
    inputTextResult: () => $('~input-text-result'),
    switchText: () => $('~switch-text'),
    switch: () => $('~switch'),
    dropdown: () => $('~Dropdown'),
    containerOptions: () => $('//android.widget.ListView[@resource-id="com.wdiodemoapp:id/select_dialog_listview"]'),
    optionOne: () => $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]'),
    placeholderDropdown: () => $('//android.widget.EditText[@text="Appium is awesome"]'),
    buttonActive: () => $('~button-Active'),
    buttonInactive: () => $('~button-Inactive'),
    messageButtonClick: () => $('//android.widget.TextView[@resource-id="android:id/message"]'),
  }

  async visit() {
    await this.elements.formPage().click();
    await this.elements.formScreen().waitForDisplayed();
  }

  async typeSomethingInInputText(text: string) {
    await this.elements.inputText().addValue(text);
    await expect(this.elements.inputTextResult()).toHaveText(text);
  }

  async turnOffSwitch() {
    await expect(this.elements.switchText()).toHaveText(expect.stringContaining('ON'));
    await this.elements.switch().click();
    await expect(this.elements.switchText()).toHaveText(expect.stringContaining('OFF'));
  }

  async chooseOptionInDropdown() {
    await this.elements.dropdown().click();
    await expect(this.elements.containerOptions()).toBeDisplayed();
    await this.elements.optionOne().click();
    await expect(this.elements.placeholderDropdown()).toHaveText('Appium is awesome');
  }

  async clickOnInactiveButton() {
    await this.elements.buttonInactive().click();
  }

  async clickOnActiveButton() {
    await this.elements.buttonActive().click();
    await expect(this.elements.messageButtonClick()).toHaveText('This button is active');
  }
}