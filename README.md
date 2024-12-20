# Aprendendo Appium

Projeto de estudo.
Conhecendo, sem cursos, a capacidade e a potencialidade do Framework Appium para testes Mobile.
Foi usado Appium com o WebdriverIo para fazer os testes, foi escolhido dois aplicativos, que foram adicionados no projeto
para os testes.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E=18.0.0-brightgreen.svg)](https://nodejs.org/)
[![Appium Version](https://img.shields.io/badge/Appium-%3E=2.1-brightgreen.svg)](http://appium.io/)

## Pré-requisito

- [Node.js](https://nodejs.org/en/download/current)
- [Appium Server](https://appium.io/docs/en/2.1/quickstart/install/)
- [Android Studio](https://developer.android.com/studio?hl=pt-br)
- [Java Development Kit (JDK)](https://www.oracle.com/br/java/technologies/downloads/#jdk21-windows)

### Versões

- **Node.js:** 20.9.0

- **Appium Server:** 2.11.3

- **JDK**: Instale a versão latest ou a de sua preferencia, logo após coloque JAVA_HOME em suas environment variables com o caminho do jdk instalado.

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

    Obs.: Rode o comando ```node -v``` para verificar se esta na versão certa do projeto antes de rodar  ```npm Install```.

    **Node:** Se não estiver na versão do projeto, 18.0.0, rode o comando ```nvm use``` caso tenha o controle de versão NVM em sua máquina. Para mais detalhes, dê uma olhada em [NVM Windows](https://learn.microsoft.com/pt-br/windows/dev-environment/javascript/nodejs-on-windows).

2. **Instalar Appium e Appium Inspector:**

   ```bash
    npm i -g appium@latest --unsafe-perm=true --allow-root
   ```

    Após instalar o Appium globalmente em sua máquina, caso queira utilizar o Appium Inspector para ajudar nos testes, baixe a ultima versão [aqui](https://github.com/appium/appium-inspector/releases/). O Appium Inspector é opcional, outra ferramenta de Inspector é o Layout Inspector do Android Studio, para saber mais sobre o Layout Inspector, acesse [aqui](https://developer.android.com/studio/debug/layout-inspector?hl=pt-br).

3. **Instalar Driver e Plugins necessários:**

    **Plugins:**

      - Gestures: É responsável pelo testes de gestos como: scroll, swipe e drapNDrop.
      - Images: É necessário este plugin para o Appium Inspector.

   ```shell
    appium plugin install --source=npm appium-gestures-plugin
    appium plugin install images
   ```

    **Driver:**

      - UiAutomator2: Driver para os testes automotivos no Mobile.

   ```shell
    appium driver install uiautomator2
   ```

## Debugar e/ou adicionar novos testes

É possivel levantar um server para utilizar aplicativos inspectors para facilitar a captura de elementos para os testes.

1. **Iniciar o Appium Server:**

    Abra um novo terminal e rode:

   ```bash
    npm start ## Abrirá o Server do Appium na porta 4723 (default)
   ```

## Executando os Testes

1. **Executar os testes:**

   ```bash
    npm test:all ## Rode todos os testes
    npm test:demoapp ./test/specs/nome_do_test.spec.js ## Rode um teste especifico do App DemoApp
    npm test:apidemos ./test/specs/nome_do_test.spec.js ## Rode um teste especifico do App ProductApp
   ```

   OBS.: Antes de rodar qualquer desses Scripts, certifique-se que o server esta rodando em um terminal separado.

2. **Exemplos de código:**

    ```javascript
     // Testando se é possivel fazer login
     describe('-> Login', () => {
        // Antes de todos os it rode os comandos abaixo
        before( async () => {
            await $('~Login').click()
        })

        // Bloco de teste
        it('Should be able to complete the login', async () => {
            // Adiciona valores nos inputs e clica no botão Login
           await $('~input-email').addValue('a@example.com')
           await $('~input-password').addValue('12345678')
           await $('~button-LOGIN').click()

           // Esperasse encontrar um modal de sucesso
           await expect(
               $('//android.widget.FrameLayout[@resource-id="android:id/content"]')
           ).toBeExisting()

           // Clica no botão Ok para tirar o modal de sucesso
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
            |-- desired/
            |-- helpers/
      |-- .appiumrc.json
      |-- .nvmrc
      |-- .npmrc
      |-- package.json
      |-- README.md
      |-- wdio.conf.ts
      |-- ...
   ```

## Testes Reporter

![Allure Reporter Tests #2](https://github.com/LeohsPaixao/appium-basico/assets/42840902/5530be95-aa36-4bc1-9578-dbd904a4cd83)

## Referencias

   Obs.: Graças a essas referencias, este projeto se tornou possivel.

- [WebdriverIo API](https://webdriver.io/docs/api)
- [Appium Docs](https://appium.io/docs/en/2.1/)
- [Appium Github](https://github.com/appium/appium)
- [Appium Discuss](https://discuss.appium.io/)

## License

Este projeto está licenciado sob a [Licença MIT](LICENSE).
