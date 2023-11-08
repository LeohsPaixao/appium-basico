const { expect, $ } = require('@wdio/globals')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        await $('//android.widget.EditText[@text="E-mail"]').setValue('leonardohspaixao@gmail.com')
        await $('//android.widget.EditText[@text="Senha"]').setValue('123456')
        await $('//android.widget.TextView[@text="Entrar"]').click()

        await expect($('android.view.ViewGroup')).toBeExisting()
    })
})

