describe('-> Swipe', () => {
    beforeEach(async () => {
        await $('~Swipe').click();
        await expect($('//android.widget.TextView[@text="Swipe horizontal"]')).toHaveText('Swipe horizontal');
    });

    after(async () => {
        await driver.pause(1000);
    });

    it.skipe('Should be able to swipe horizontally', async () => {
        // Elemento alvo para verificar após o swipe
        const targetElement = await $('//android.widget.TextView[@text="GREAT COMMUNITY"]');

        // Obtenha a posição inicial e final para o swipe
        const startX = 0.8; // Porcentagem da largura da tela
        const endX = 0.2; // Porcentagem da largura da tela
        const y = 0.5; // Porcentagem da altura da tela

        const { height, width } = await driver.getWindowSize();

        // Calcula as coordenadas reais
        const startCoords = { x: width * startX, y: height * y };
        const endCoords = { x: width * endX, y: height * y };

        // Realiza o swipe
        await driver.touchPerform([
            { action: 'press', options: startCoords },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: endCoords },
            { action: 'release', options: {} },
        ]);

        // Verifica se o elemento alvo está visível após o swipe
        const isTargetVisible = await targetElement.isDisplayed();
        assert.isTrue(isTargetVisible, 'O swipe horizontal falhou ou o elemento alvo não está visível após o swipe');
    });
})
