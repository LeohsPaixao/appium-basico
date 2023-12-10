#!/bin/bash
set -e

# Adicionar tratamento de erro e logs detalhados
trap 'echo "Erro na execução do script"; exit 1' ERR
set -x

echo "Configuração do Emulador"

# Coloca no grupo KVM
sudo groupadd -r kvm
sudo gpasswd -a $USER kvm
sudo gpasswd -a runner kvm
ls -la /etc/group

# Definir o diretório AVD para evitar problemas com o caminho
export ANDROID_AVD_HOME=$HOME/.config/.android/avd

# Atualiza todos os pacotes do SDK
sdkmanager --update

# Instalação de pacotes adicionais (ajuste conforme necessário)
sdkmanager --install "platforms;android-31" "build-tools;31.0.0" "extras;google;m2repository" "extras;android;m2repository" "system-images;android-31;google_apis;x86"

# Criação do AVD (Android Virtual Device)
echo "no" | avdmanager --verbose create avd --force --name testAVD --package 'system-images;android-31;google_apis;x86' --tag google_apis --abi x86

# Verifica se o AVD foi criado com sucesso
if [ -d "$ANDROID_AVD_HOME/testAVD.avd" ]; then
  echo "AVD criado com sucesso em $ANDROID_AVD_HOME"
else
  echo "Erro: Falha ao criar o AVD em $ANDROID_AVD_HOME"
  exit 1
fi

# Inicializa o emulador em segundo plano
$ANDROID_HOME/emulator/emulator -avd testAVD -no-accel -no-window -no-audio -no-boot-anim -no-jni -camera-back none -camera-front none -selinux permissive -qemu -m 4096 &

echo "Aguardando a inicialização completa do emulador"
until adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed) ]]; do sleep 1; done'; do
    sleep 5
done

echo "Emulador configurado e aberto com sucesso!"
