#!/bin/bash
set -ex

echo "Configuração do Emulador"

# Atualiza todos os pacotes do SDK
sdkmanager --update

# Instalação de pacotes adicionais (ajuste conforme necessário)
sdkmanager --install "platforms;android-33" "build-tools;33.0.0" "extras;google;m2repository" "extras;android;m2repository"

# Verifica se o emulador está instalado e, se necessário, instala
sdkmanager --install "emulator"

# Instala a imagem do sistema Android
echo 'y' | sdkmanager --install "system-images;android-33;google_apis;x86_64"

# Criação do AVD (Android Virtual Device)
echo 'no' | avdmanager --verbose create avd --force --name test --package "system-images;android-33;google_apis;x86_64" --abi google_apis/x86_64

# Inicializa o emulador em segundo plano
emulator -avd test -no-window -no-audio -no-boot-anim -no-jni -camera-back none -camera-front none -selinux permissive -qemu -m 4096 &

echo "Emulador configurado com sucesso!"
