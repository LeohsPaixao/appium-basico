# Aprendendo Appium

Projeto de estudo.
Conhecendo, sem cursos, a capacidade e a potencialidade do Framework Appium para testes Mobile.

## Pré-requisito

- [Node.js](https://nodejs.org/)
- [Appium Server](http://appium.io/)
- [Android Studio](https://developer.android.com/studio?hl=pt-br)
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)

### Versões

- **Node.js:** ^16.13.0 || >=18.0.0

  - O Appium não suporta versão acima do 18, veja mais em [Requirements](https://appium.io/docs/en/2.1/intro/requirements/)

- **Appium Server:** 2.2.2

Há dois ambientes capazes de rodar os testes Mobile, através do Emulador ou pelo Real Device:

#### **Emulador**

Será necessário ter o Android Studio ou o Visor para que consiga criar um Emulador para rodar os testes, recomendo que assista este [video](https://www.youtube.com/watch?v=N5ALlkXOowI).

#### **Real Devices**

O celular que será utilizado para os testes deve esta com a Opção de Desenvolvedor habilitado para que possa habilitar a opção Depuração. o ADB utilizará desta opção para conectar no celular e rodar os testes. Para mais detalhes assista este [video](https://www.youtube.com/watch?v=3vcq2RDhwoc).

## Configuração

1. **Clonar o repositório**:

   ```bash
    git clone git@github.com:LeohsPaixao/appium-basico.git
    cd appium-basico
    npm install
   ```

    Obs.: Verificar a versão do node antes de rodar  ```npm Install```

2. **Instalar Appium e Appium Inspector:**

   ```bash
    npm i -g appium@latest
   ```

3. **Instalar Driver e Plugins necessários:**

    **Plugins:**

      Gestures: É responsável pelo testes de gestos como: scroll, swipe e drapNDrop.
      Images: É necessário este plugin para o Appium Inspector.

   ```shell
    appium plugin install --source=npm appium-gestures-plugin
    appium plugin install images
   ```

    **Driver:**

      UiAutomator2: Driver para os testes automotivos no Mobile.

   ```shell
    appium driver install uiautomator2
   ```

    Após instalar o Appium globalmente na sua máquina, vá [Appium Inspector](https://github.com/appium/appium-inspector/releases/tag/v2023.11.1) e instale.

## Executando os Testes

1. **Iniciar o Appium Server:**

    Abra um novo terminal e rode:

   ```bash
    npm start ## Abrirá o Server do Appium na porta 4723 (default)
   ```

2. **Executar os testes:**

   ```bash
    npm test ## Rode todos os testes
    npm test ./test/specs/nome_do_test.spec.js ## Rode um teste especifico
   ```

3. **Exemplos de código:**

    ```javascript
     // Testando se é possivel fazer login
     describe('-> Login', () => {
        before( async () => {
            await $('~Login').click()
        })

        it('Should be able to complete the login', async () => {
           await $('~input-email').addValue('a@example.com')
           await $('~input-password').addValue('12345678')
           await $('~button-LOGIN').click()

           await expect(
               $('//android.widget.FrameLayout[@resource-id="android:id/content"]')
           ).toBeExisting()

           await $('//android.widget.Button[@resource-id="android:id/button1"]').click()
        })
    })
    ```

## Estrutura do Projeto

   ```lua
   appium-basico/
      |-- .github/
          |-- workflows/
      |-- app/
          |-- apk
      |-- test/
      |   |-- specs/
      |   |-- support/
      |-- .appiumrc.json
      |-- .nvmrc
      |-- README.md
      |-- package.json
      |-- ...
   ```

## Referencias

   Obs.: Graças a essas referencias, este projeto se tornou possivel.

- [WebdriverIo API](https://webdriver.io/docs/api)
- [Appium Docs](https://appium.io/docs/en/2.1/)
- [Appium Github](https://github.com/appium/appium)
- [Appium Discuss](https://discuss.appium.io/)

## License

Este projeto está licenciado sob a [MIT](LICENSE)
