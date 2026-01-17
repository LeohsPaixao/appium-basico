import WebviewElements from './webview.page';

const method = new WebviewElements();

describe('-> Webview', () => {
  before(async () => await method.visit());

  it('Should be able to navigate to Get Started and return', async () => {
    await method.navigateToGetStarted();
    await method.validateGetStartedScreen();
    await method.navigateToHome();
    await method.validateHomeScreen();
  });

  it('Should be able to search something', async () => {
    await method.onClickButtonSearch();
    await method.typeSomethingInSearch('Visual Testing');
    await method.onClickProtocols();
    await method.validateVisualTestingScreen();
  });
});
