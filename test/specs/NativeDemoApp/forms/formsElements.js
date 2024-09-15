class FormsElements {
  formPage = () => $('~Forms');
  formScreen = () => $('~Forms-screen');
  inputText = () => $('~text-input');
  inputTextResult = () => $('~input-text-result');
  switchText = () => $('~switch-text');
  switch = () => $('~switch');
  dropdown = () => $('~Dropdown');
  containerOptions = () => $('//android.widget.ListView[@resource-id="com.wdiodemoapp:id/select_dialog_listview"]');
  optionOne = () => $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]');
  placeholderDropdown = () => $('//android.widget.EditText[@text="Appium is awesome"]');
  buttonActive = () => $('~button-Active');
  buttonInactive = () => $('~button-Inactive');
  messageButtonClick = () => $('//android.widget.TextView[@resource-id="android:id/message"]');
}

module.exports = FormsElements;