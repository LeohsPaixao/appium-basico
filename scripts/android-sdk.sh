#!/bin/bash
set -ex

echo "Android SDK Configuration"

brew update
brew install --cask homebrew/cask-versions/temurin8
brew install android-sdk
brew install -y openjdk-8-jre-headless

export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export PATH=$PATH:$JAVA_HOME/bin

mkdir -p $HOME/android-sdk
wget -q https://dl.google.com/android/repository/commandlinetools-mac-6609375_latest.zip -O android-sdk.zip
unzip -qq android-sdk.zip -d $HOME/android-sdk

export ANDROID_HOME=$HOME/android-sdk
export ANDROID_SDK_ROOT=$HOME/android-sdk
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/bin:$ANDROID_HOME/platform-tools

echo "export PATH=$PATH:$ANDROID_HOME/cmdline-tools/bin:$ANDROID_HOME/platform-tools" >> $HOME/.bashrc

source ~/.bashrc
