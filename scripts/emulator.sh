#!/bin/bash
set -ex

echo "Configuração do Emulador"

# Atualiza todos os pacotes do SDK
sdkmanager --update

# Verifica o pacote da imagem do sistema
sdkmanager --list

# Instalação de pacotes adicionais (ajuste conforme necessário)
sdkmanager --install "platforms;android-30" "build-tools;30.0.3" "extras;google;m2repository" "extras;android;m2repository"

# Verifica se o AVD foi criado com sucesso
avdmanager list avd

# Criação do AVD (Android Virtual Device)
echo "no" | avdmanager --verbose create avd --force --name test --package "system-images;android-30;google_apis;x86_64" --abi google_apis/x86_64

# Inicializa o emulador em segundo plano
$ANDROID_HOME/emulator/emulator -avd test -no-window -no-audio -no-boot-anim -no-jni -camera-back none -camera-front none -selinux permissive -qemu -m 4096 &

# Aguarda até que o emulador esteja completamente inicializado
until adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed) ]]; do sleep 1; done'; do
    sleep 5
done

echo "Emulador configurado com sucesso!"
