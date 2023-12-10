#!/bin/bash
set -e

# Adicionar tratamento de erro e logs detalhados
trap 'echo "Erro na execução do script"; exit 1' ERR
set -x

echo "Configuração do Emulador"

# Definir o diretório AVD para evitar problemas com o caminho
export ANDROID_AVD_HOME=$RUNNER_WORKSPACE/.android/avd

# Atualiza todos os pacotes do SDK
sdkmanager --update

# Instalação de pacotes adicionais (ajuste conforme necessário)
sdkmanager --install "platforms;android-31" "build-tools;31.0.0" "extras;google;m2repository" "extras;android;m2repository" "system-images;android-31;google_apis;x86_64"

# Criação do AVD (Android Virtual Device)
echo "no" | avdmanager --verbose create avd --force --name testAVD --package 'system-images;android-31;google_apis;x86_64' --tag google_apis --abi x86_64

# Verifica se o AVD foi criado com sucesso
avdmanager list avd

# Aguardar para a criação do Emulador
sleep 6

# Inicializa o emulador em segundo plano
$ANDROID_HOME/emulator/emulator -avd testAVD -no-window -no-audio -no-boot-anim -no-jni -camera-back none -camera-front none -selinux permissive -qemu -m 4096 &

# Adicionar logs detalhados
echo "Aguardando a inicialização completa do emulador"
until adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed) ]]; do sleep 1; done'; do
    sleep 5
done

echo "Emulador configurado e aberto com sucesso!"
