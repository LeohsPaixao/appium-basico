#!/bin/bash
set -ex

echo "Install and Running Appium Server as a Background process"


sudo npm install
sudo npm install -g appium --unsafe-perm=true --allow-root
sudo appium -v
sudo npm start

sudo gpasswd -a $USER kvm
