#!/bin/bash
set -ex

echo "Android SDK Configuration"

mkdir -p $RUNNER_WORKSPACE/android-sdk
wget -q https://dl.google.com/android/repository/commandlinetools-linux-6609375_latest.zip -O android-sdk.zip
unzip -qq android-sdk.zip -d $RUNNER_WORKSPACE/android-sdk

export ANDROID_HOME=$RUNNER_WORKSPACE/android-sdk
export ANDROID_SDK_ROOT=$RUNNER_WORKSPACE/android-sdk
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools

# Configura o PATH para garantir que as ferramentas do Android estejam disponíveis
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin

# Instalação de pacotes adicionais (ajuste conforme necessário)
sdkmanager --install "platforms;android-33" "build-tools;33.0.0" "extras;google;m2repository" "extras;android;m2repository"

# Verifica se o emulador está instalado e, se necessário, instala
sdkmanager --install "emulator"

# Adicione Logs Detalhados
echo "Android SDK Configurado com sucesso!"
echo "ANDROID_HOME: $ANDROID_HOME"
echo "ANDROID_SDK_ROOT: $ANDROID_SDK_ROOT"
echo "PATH: $PATH"
