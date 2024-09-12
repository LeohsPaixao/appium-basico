class SwipeElements {
  swipePage = () => $("~Swipe");
  carousel = () => $("~Carousel");
  currentElement = () => $('//android.widget.TextView[@text="FULLY OPEN SOURCE"]');
  targetElement = () => $('//android.widget.TextView[@text="GREAT COMMUNITY"]');
  swipeScreen = () => $("~Swipe-screen");
  webDriverLogo = () => $("~WebdriverIO logo");
  swipeText = () => $('//android.widget.TextView[@text="Swipe horizontal"]');
}

module.exports = SwipeElements;
