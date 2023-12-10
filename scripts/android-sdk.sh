#!/bin/bash
set -ex

echo "Android SDK Configuration"

sudo apt update
sudo apt install -y unzip wget openjdk-11-jdk

# Instale o SDK Tools
wget -q https://dl.google.com/android/repository/commandlinetools-linux-6609375_latest.zip -O android-sdk.zip
unzip -qq android-sdk.zip -d $RUNNER_WORKSPACE/android-sdk

export ANDROID_HOME=$RUNNER_WORKSPACE/android-sdk
export ANDROID_SDK_ROOT=$RUNNER_WORKSPACE/android-sdk
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools

# Configura o PATH para garantir que as ferramentas do Android estejam disponíveis
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin~

# Aceitar automaticamente as licenças do SDK
y | sdkmanager --licenses

# Adicione Logs Detalhados
echo "Android SDK Configurado com sucesso!"
echo "ANDROID_HOME: $ANDROID_HOME"
echo "ANDROID_SDK_ROOT: $ANDROID_SDK_ROOT"
echo "PATH: $PATH"
