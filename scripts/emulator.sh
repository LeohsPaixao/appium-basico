#!/bin/bash
set -ex

echo "Configuração do Emulador"

# Atualiza todos os pacotes do SDK
sdkmanager --update

# Verifica o pacote da imagem do sistema
sdkmanager --list

# Instalação de pacotes adicionais (ajuste conforme necessário)
sdkmanager --install "platforms;android-33" "build-tools;33.0.2" "extras;google;m2repository" "extras;android;m2repository" "emulator"


# Criação do AVD (Android Virtual Device)
echo "no" | avdmanager --verbose create avd --force --name test --package "system-images;android-33;google_apis_playstore;x86_64" --abi google_apis/x86_64

# Verifica se o AVD foi criado com sucesso
avdmanager list avd

# Inicializa o emulador em segundo plano
$ANDROID_HOME/emulator/emulator -avd test -no-window -no-audio -no-boot-anim -no-jni -camera-back none -camera-front none -selinux permissive -qemu -m 4096 &

# Aguarda até que o emulador esteja completamente inicializado
until adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed) ]]; do sleep 1; done'; do
    sleep 5
done

echo "Emulador configurado com sucesso!"
