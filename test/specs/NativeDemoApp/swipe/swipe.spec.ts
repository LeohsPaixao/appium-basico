import SwipeElements from './swipe.page.ts';

const method = new SwipeElements();

describe('-> Swipe', () => {
    before(async () => await method.visit());

    it('Should not be able to swipe past carousel', async () => {
        await method.validateSwipeCarousel();
        await method.swipeRightCarousel();
        await method.validateCurrentElement();
    });

    it('Should be able to swipe left', async () => {
        await method.validateSwipeCarousel();
        await method.swipeLeftCarousel();
        await method.validateTargetElement();
    });

    it('Should be able to scroll down', async () => {
        await method.validateSwipeScreen();
        await method.scrollDownSwipeScreen();
        await method.validateWebDriverLogo();
    });
});
