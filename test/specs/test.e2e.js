const { expect, $ } = require('@wdio/globals')

describe('WebdriverIo', () => {
    it('Should able to click login icon', async () => {
        const LOGIN_ICON = '//*[@content-desc="Login"]'

        await $(LOGIN_ICON).click()
    });
})

