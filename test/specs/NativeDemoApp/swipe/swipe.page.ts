import { scrollIntoView, swipeElement } from '../../../support/helpers/gestures';

export default class SwipeElements {
  elements = {
    swipePage: () => $("~Swipe"),
    carousel: () => $("~Carousel"),
    currentElement: () => $('//android.widget.TextView[@text="FULLY OPEN SOURCE"]'),
    targetElement: () => $('//android.widget.TextView[@text="GREAT COMMUNITY"]'),
    swipeScreen: () => $("~Swipe-screen"),
    webDriverLogo: () => $("~WebdriverIO logo"),
    swipeText: () => $('//android.widget.TextView[@text="Swipe horizontal"]'),
  }

  async visit() {
    await this.elements.swipePage().click();
    await this.elements.swipeText().waitForDisplayed();
    await expect(this.elements.swipeText()).toHaveText('Swipe horizontal');
  }

  async swipeRightCarousel() {
    await swipeElement(driver, this.elements.carousel(), 'right', 50);
  }

  async swipeLeftCarousel() {
    await swipeElement(driver, this.elements.carousel(), 'left', 50);
  }

  async validateCurrentElement() {
    await expect(this.elements.currentElement()).toBeDisplayed();
  }

  async validateTargetElement() {
    await expect(this.elements.targetElement()).toBeDisplayed();
  }

  async validateSwipeCarousel() {
    await expect(this.elements.carousel()).toBeDisplayed();
  }

  async validateSwipeScreen() {
    await expect(this.elements.swipeScreen()).toBeDisplayed();
  }

  async validateWebDriverLogo() {
    await expect(this.elements.webDriverLogo()).toBeDisplayed();
  }

  async scrollDownSwipeScreen() {
    const screenId = await this.elements.swipeScreen().elementId;

    await scrollIntoView(driver, screenId, 'WebdriverIO logo', 'accessibility id', 50, 'up', 4);
  }
}
