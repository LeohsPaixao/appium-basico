# Aprendendo Appium

Projeto de estudo.
Conhecendo, sem cursos, a capacidade e a potencialidade do Framework Appium para testes Mobile.
Foi usado Appium com o WebdriverIo para fazer os testes, foi escolhido dois aplicativos, que foram adicionados no projeto
para os testes.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node.js-22.19.0-brightgreen.svg)](https://nodejs.org/)
[![Appium Version](https://img.shields.io/badge/Appium-3.1.2-brightgreen.svg)](http://appium.io/)

## Pré-requisito

- [Node.js](https://nodejs.org/en/download/current)
- [Appium Server](https://appium.io/docs/en/2.1/quickstart/install/)
- [Android Studio](https://developer.android.com/studio?hl=pt-br)
- [Java Development Kit (JDK)](https://www.oracle.com/br/java/technologies/downloads/#jdk21-windows)

### Versões

- **Node.js:** 22.19.0 (gerenciado via `.nvmrc`)

- **Appium Server:** 3.1.2

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
   ```

2. **Configurar a versão do Node.js**:

   ```bash
    nvm use
   ```

   Obs.: Rode o comando `node -v` para verificar se está na versão certa do projeto antes de rodar `yarn install`.

   **Node:** Se não estiver na versão do projeto, 22.19.0, rode o comando `nvm use` caso tenha o controle de versão NVM em sua máquina. Para mais detalhes, dê uma olhada em [NVM Windows](https://learn.microsoft.com/pt-br/windows/dev-environment/javascript/nodejs-on-windows).

3. **Instalar dependências**:

   ```bash
    yarn install
   ```

4. **Configurar variáveis de ambiente**:

   Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

   ```bash
    cp .env.example .env
   ```

   Edite o arquivo `.env` e configure:
   - `APP_ENV`: Ambiente do app (`demoapp` ou `productapp`)
   - `APPIUM_UDID`: UDID do dispositivo/emulador (opcional, pode ser deixado vazio para usar o primeiro dispositivo disponível)

5. **Instalar Appium e Appium Inspector:**

   ```bash
    yarn global add appium@latest
   ```

   Após instalar o Appium globalmente em sua máquina, caso queira utilizar o Appium Inspector para ajudar nos testes, baixe a ultima versão [aqui](https://github.com/appium/appium-inspector/releases/). O Appium Inspector é opcional, outra ferramenta de Inspector é o Layout Inspector do Android Studio, para saber mais sobre o Layout Inspector, acesse [aqui](https://developer.android.com/studio/debug/layout-inspector?hl=pt-br).

6. **Instalar Driver e Plugins necessários:**

   **Plugins:**

     - Gestures: É responsável pelo testes de gestos como: scroll, swipe e dragNDrop.
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

## Projetos de Testes

Este repositório contém **dois projetos de testes** distintos:

### 1. NativeDemoApp (TypeScript) - Projeto Moderno

Projeto mais atualizado utilizando **TypeScript** e seguindo o padrão **Page Object Model (POM)**.

- **Localização**: `test/specs/NativeDemoApp/`
- **Linguagem**: TypeScript
- **Padrão**: Page Object Model
- **Estrutura**: Separação entre arquivos `.page.ts` (Page Objects) e `.spec.ts` (Testes)
- **Aplicativo**: Android Native Demo App (APK: `Android-NativeDemoApp-0.4.0.apk`)

**Funcionalidades testadas:**
- Login
- Signup
- Forms
- Drag and Drop
- Swipe
- WebView

**Exemplo de código (TypeScript):**

```typescript
// login.page.ts - Page Object
export default class LoginElements {
  elements = {
    fieldEmail: () => $('~input-email'),
    fieldPassword: () => $('~input-password'),
    btnLogin: () => $('~button-LOGIN'),
    messageLoginSucceeded: () => $('//android.widget.TextView[@resource-id="android:id/message"]'),
  }

  async fillLoginForm(email: string, password: string) {
    await this.elements.fieldEmail().addValue(email);
    await this.elements.fieldPassword().addValue(password);
  }

  async clickLoginButton() {
    await this.elements.btnLogin().click();
  }

  async validateLoginSucceededMessage() {
    await expect(this.elements.messageLoginSucceeded()).toHaveText('You are logged in!');
  }
}
```

```typescript
// login.spec.ts - Teste
import LoginElements from './login.page.js';

const method = new LoginElements();

describe('-> Login', () => {
    before(async () => await method.visitLoginPage());

    it('Should be able to complete the login', async () => {
        await method.fillLoginForm('example@example.com', '12345678');
        await method.clickLoginButton();
        await method.validateLoginSucceededMessage();
    });
});
```

### 2. ProductApp (JavaScript) - Projeto Legado

Projeto mais antigo utilizando **JavaScript** (CommonJS) com estrutura tradicional.

- **Localização**: `test/specs/productApp/`
- **Linguagem**: JavaScript (CommonJS)
- **Padrão**: Estrutura tradicional com classes de elementos
- **Aplicativo**: Product Registration App (APK: `product_registration.apk`)

**Funcionalidades testadas:**
- Cadastro de produtos
- Edição de produtos
- Remoção de produtos
- Busca de produtos
- Incremento/Decremento de estoque
- Relatórios
- Backup

**Exemplo de código (JavaScript):**

```javascript
// productElements.js - Classe de elementos
class ProductElements {
  btnNewProduct = () => $('[text="NEW"]');
  btnSaveProduct = () => $('id=br.com.pztec.estoque:id/btn_gravar_assunto');
  inputDescription = () => $('id=br.com.pztec.estoque:id/txt_descricao');
  tableProduct = () => $('id=br.com.pztec.estoque:id/tabela_itens');
}

module.exports = ProductElements;
```

```javascript
// product.spec.js - Teste
const ProductElements = require('./product/productElements');

const elements = new ProductElements();

describe('-> Product', () => {
    it('Should be able to save a new product', async () => {
        await elements.btnNewProduct().click();
        await fillProductForm();
        await elements.btnSaveProduct().click();
        await expect(elements.tableProduct()).toBeDisplayed();
    });
});
```

## Debugar e/ou adicionar novos testes

É possivel levantar um server para utilizar aplicativos inspectors para facilitar a captura de elementos para os testes.

1. **Iniciar o Appium Server:**

    Abra um novo terminal e rode:

   ```bash
    yarn start ## Abrirá o Server do Appium na porta 4723 (default)
   ```

## Executando os Testes

1. **Executar os testes:**

   ```bash
    yarn test:all              # Roda todos os testes (NativeDemoApp + ProductApp)
    yarn test:demoapp          # Roda todos os testes do NativeDemoApp (TypeScript)
    yarn test:productapp       # Roda todos os testes do ProductApp (JavaScript)
    yarn wdio                  # Executa o WebdriverIO com configuração padrão
   ```

   **OBS.:** Antes de rodar qualquer desses Scripts, certifique-se que o server está rodando em um terminal separado.

2. **Gerar relatórios:**

   ```bash
    yarn relatory              # Gera o relatório Allure
    yarn relatory:open         # Abre o relatório Allure no navegador
   ```

## Estrutura do Projeto

   ```lua
    appium-basico/
    |-- apps/
    |   |-- Android-NativeDemoApp-0.4.0.apk
    |   |-- product_registration.apk
    |-- test/
    |   |-- specs/
    |   |   |-- NativeDemoApp/          # Projeto TypeScript (Moderno)
    |   |   |   |-- dragAnddrop/
    |   |   |   |   |-- dragndrop.page.ts
    |   |   |   |   |-- dragndrop.spec.ts
    |   |   |   |-- forms/
    |   |   |   |   |-- forms.page.ts
    |   |   |   |   |-- forms.spec.ts
    |   |   |   |-- login/
    |   |   |   |   |-- login.page.ts
    |   |   |   |   |-- login.spec.ts
    |   |   |   |-- signup/
    |   |   |   |   |-- signup.page.ts
    |   |   |   |   |-- signup.spec.ts
    |   |   |   |-- swipe/
    |   |   |   |   |-- swipe.page.ts
    |   |   |   |   |-- swipe.spec.ts
    |   |   |   |-- webview/
    |   |   |       |-- webview.page.ts
    |   |   |       |-- webview.spec.ts
    |   |   |-- productApp/             # Projeto JavaScript (Legado)
    |   |       |-- backup/
    |   |       |   |-- backupElements.js
    |   |       |-- backup.spec.js
    |   |       |-- product/
    |   |       |   |-- productElements.js
    |   |       |-- product.spec.js
    |   |       |-- report/
    |   |       |   |-- reportElements.js
    |   |       |-- reportInventory.spec.js
    |   |       |-- reportStockEntries.spec.js
    |   |-- support/
    |       |-- desired/
    |       |   |-- desiredNativeApp.ts
    |       |   |-- desiredProductApp.ts
    |       |-- helpers/
    |           |-- backScreen.js
    |           |-- dateRandom.js
    |           |-- fillProductForm.js
    |           |-- gestures.ts          # Helpers de gestos (TypeScript)
    |           |-- pdfGenerator.js
    |           |-- productGenerator.js
    |-- .appiumrc.json
    |-- .env.example
    |-- .nvmrc
    |-- package.json
    |-- README.md
    |-- tsconfig.json
    |-- wdio.conf.ts
    |-- yarn.lock
   ```

## Helpers e Utilitários

O projeto possui helpers compartilhados entre os dois projetos:

- **gestures.ts**: Funções para gestos (drag and drop, swipe, scroll, etc.) - TypeScript
- **fillProductForm.js**: Preenchimento de formulários de produtos - JavaScript
- **productGenerator.js**: Geração de dados de produtos - JavaScript
- **dateRandom.js**: Geração de datas aleatórias - JavaScript
- **backScreen.js**: Navegação de telas - JavaScript
- **pdfGenerator.js**: Geração de PDFs - JavaScript

## Testes Reporter

O projeto utiliza o **Allure Reporter** para gerar relatórios detalhados dos testes.

![Allure Reporter Tests #2](https://github.com/LeohsPaixao/appium-basico/assets/42840902/5530be95-aa36-4bc1-9578-dbd904a4cd83)

## Diferenças entre os Projetos

| Característica | NativeDemoApp (TypeScript) | ProductApp (JavaScript) |
|---------------|---------------------------|------------------------|
| Linguagem | TypeScript | JavaScript (CommonJS) |
| Padrão | Page Object Model | Classes tradicionais |
| Estrutura | `.page.ts` + `.spec.ts` | `.js` com elementos e testes |
| Imports | ES6 Modules (`import/export`) | CommonJS (`require/module.exports`) |
| Type Safety | ✅ Sim | ❌ Não |
| Modernidade | ✅ Mais moderno | ⚠️ Legado |

## Referencias

   Obs.: Graças a essas referencias, este projeto se tornou possivel.

- [WebdriverIo API](https://webdriver.io/docs/api)
- [Appium Docs](https://appium.io/docs/en/2.1/)
- [Appium Github](https://github.com/appium/appium)
- [Appium Discuss](https://discuss.appium.io/)

## License

Este projeto está licenciado sob a [Licença MIT](LICENSE).
