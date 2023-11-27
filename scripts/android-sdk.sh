#!/bin/bash
set -ex

echo "Android SDK Configuration"

mkdir -p $RUNNER_WORKSPACE/android-sdk
wget -q https://dl.google.com/android/repository/commandlinetools-mac-6609375_latest.zip -O android-sdk.zip
unzip -qq android-sdk.zip -d $RUNNER_WORKSPACE/android-sdk

export ANDROID_HOME=$RUNNER_WORKSPACE/android-sdk
export ANDROID_SDK_ROOT=$RUNNER_WORKSPACE/android-sdk
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/bin:$ANDROID_HOME/platform-tools

# Adiciona as variáveis de ambiente ao profile para persistência
echo "export ANDROID_HOME=$RUNNER_WORKSPACE/android-sdk" >> $RUNNER_WORKSPACE/.bash_profile
echo "export ANDROID_SDK_ROOT=$RUNNER_WORKSPACE/android-sdk" >> $RUNNER_WORKSPACE/.bash_profile
echo "export PATH=$PATH:$ANDROID_HOME/cmdline-tools/bin:$ANDROID_HOME/platform-tools" >> $RUNNER_WORKSPACE/.bash_profile

# Garante que as variáveis sejam carregadas no atual ambiente
source $RUNNER_WORKSPACE/.bash_profile

# Configura o PATH para garantir que as ferramentas do Android estejam disponíveis
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
