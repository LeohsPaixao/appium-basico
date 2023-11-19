# Nome do Projeto

Projeto de estudo, conhecendo, sem cursos, a capacidade e potencialidade do Framework Appium para testes Mobile.

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Appium Server](http://appium.io/)
- [Android Studio](https://developer.android.com/studio?hl=pt-br)
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)

### Versões

- **Node.js:** ^16.13.0 || >=18.0.0
  - O Appium não suporta versão acima do 18, veja mais em [Requirements](https://appium.io/docs/en/2.1/intro/requirements/)
- **Appium Server:** 2.2.2

*****

Há dois ambientes capaz de rodar os testes Mobile

## Configuração

1. **Clonar o repositório:**

   ```bash
    git clone git@github.com:LeohsPaixao/appium-basico.git

    cd appium-basico
    npm install

## Executando os Testes

1. **Iniciar o Appium Server:**

    Abra um novo terminal e rode:

    ```bash
    npm start ## Server na porta 4723 (default)

2. **Executar os testes:**

    ```bash
    npm test ## Rode todos os testes
    npm test ./test/specs/nome_do_test.spec.js ## Rode um teste especifico

## Estrutura do Projeto

   ```lua
   appium-basico/
   |-- .github/
   |-- app/
   |-- test/
   |   |-- specs/
   |   |-- support/
   |-- .appiumrc.json
   |-- .nvmrc
   |-- README.md
   |-- package.json
   |-- ...
