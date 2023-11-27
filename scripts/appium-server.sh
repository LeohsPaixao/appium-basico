#!/bin/bash
set -ex

# Tratar erros
trap 'echo "Erro na execução do script"; exit 1' ERR

echo "Install and Running Appium Server as a Background process"

# Instalar Appium globalmente usando $RUNNER_WORKSPACE
npm install -g appium --unsafe-perm=true --allow-root --prefix $RUNNER_WORKSPACE

# Verificar a versão do Appium instalado
appium -v

# Executar Appium em segundo plano
appium --config .appiumrc.json &>/dev/null &
