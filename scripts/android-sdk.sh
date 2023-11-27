#!/bin/bash
set -ex

echo "Android SDK Configuration"

brew update

mkdir -p $RUNNER_WORKSPACE/android-sdk
wget -q https://dl.google.com/android/repository/commandlinetools-mac-6609375_latest.zip -O android-sdk.zip
unzip -qq android-sdk.zip -d $RUNNER_WORKSPACE/android-sdk

export ANDROID_HOME=$RUNNER_WORKSPACE/android-sdk
export ANDROID_SDK_ROOT=$RUNNER_WORKSPACE/android-sdk
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/bin:$ANDROID_HOME/platform-tools

echo "export PATH=$PATH:$ANDROID_HOME/cmdline-tools/bin:$ANDROID_HOME/platform-tools" >> $HOME/.bashrc

source ~/.bashrc
