#!/bin/bash
set -e

echo "Instalar e executar o servidor Appium como um processo em segundo plano"

# Instalar Appium globalmente usando $RUNNER_WORKSPACE
npm install -g appium --unsafe-perm=true --allow-root

# Verificar a versão do Appium instalado
appium_version=$(appium -v)
echo "Appium version: $appium_version"

# Verificar se a instalação foi bem-sucedida
if [ $? -eq 0 ]; then
    echo "Appium instalado com sucesso"
else
    echo "Falha na instalação do Appium"
    exit 1
fi

# Executar Appium em segundo plano
echo "Iniciando o servidor Appium em segundo plano"
appium --config .appiumrc.json > appium_log.txt 2>&1 &

# Adicionar logs detalhados
tail -n 20 appium_log.txt
