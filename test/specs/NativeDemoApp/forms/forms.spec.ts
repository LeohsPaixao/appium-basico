import FormsElements from './forms.page.js';

const method = new FormsElements();

describe('-> Forms', () => {
  before(async () => {
    await method.visit();
  });

  it('Should be able to type something in the first field', async () => {
    await method.typeSomethingInInputText('Type something');
  });

  it('Should be able to turn off the switch', async () => {
    await method.turnOffSwitch();
  });

  it('Should be able to choose an option in the dropdown', async () => {
    await method.chooseOptionInDropdown();
  });

  it('Should be able to click on the Inactive button', async () => {
    await method.clickOnInactiveButton();
  });

  it('Should be able to click on the Active button', async () => {
    await method.clickOnActiveButton();
  });
});
