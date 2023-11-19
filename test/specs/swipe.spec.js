describe('-> Swipe', () => {
    beforeEach(async () => {
        await $('~Swipe').click();
        await expect($('//android.widget.TextView[@text="Swipe horizontal"]')).toHaveText('Swipe horizontal');
    });

    after(async () => {
        await driver.pause(1000);
    });

    it('Should not be able to swipe past carousel', async () => {
        // Elemento alvo para verificar após o swipe
        const targetElement = await $('//android.widget.TextView[@text="GREAT COMMUNITY"]');
        const carousel = await $("~Carousel");

        // Ensure elements are displayed
        await expect(carousel).toBeDisplayed();
        await expect(targetElement).not.toBeDisplayed(); // Ensure the target element is not visible initially

        // Get the element ID
        const carouselId = carousel.elementId;

        // Perform a left swipe on Carousel using mobile: swipe
        await driver.executeScript('gesture: swipe', [{
            elementId: carouselId,
            percentage: 50,
            direction: 'right',
        }]);

        // Verifica se o elemento alvo está visível após o swipe
        await expect(targetElement).not.toBeDisplayed();
})

    it('Should be able to swipe left', async () => {
        // Elemento alvo para verificar após o swipe
        const targetElement = await $('//android.widget.TextView[@text="GREAT COMMUNITY"]');
        const carousel = await $("~Carousel");

        // Ensure elements are displayed
        await expect(carousel).toBeDisplayed();
        await expect(targetElement).not.toBeDisplayed(); // Ensure the target element is not visible initially

        // Get the element ID
        const carouselId = carousel.elementId;

        // Perform a left swipe on Carousel using mobile: swipe
        await driver.executeScript('gesture: swipe',
            [{
                elementId: carouselId,
                percentage: 50,
                direction: 'left',
            }]
        );

        // Verifica se o elemento alvo está visível após o swipe
        await expect(targetElement).toBeDisplayed();
    });

    it('Should be able to scroll to down', async () => {
        const targetElement = await $('~WebdriverIO logo')
        const screen = await $('~Swipe-screen');

        await expect(targetElement).not.toBeDisplayed();
        await expect(screen).toBeDisplayed();

        const screenId = screen.elementId;

        await driver.executeScript('gesture: scrollElementIntoView',
            [{
                scrollableView: screenId,
                strategy: "accessibility id",
                selector: "WebdriverIO logo",
                percentage: 50,
                direction: 'up',
                maxCount: 4,
            }]
        );

        await expect(targetElement).toBeDisplayed();
    })
});
