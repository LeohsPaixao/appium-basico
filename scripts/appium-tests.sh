#!/bin/bash
set -ex

echo "Install and Running Appium Server as a Background process"

sudo gpasswd -a $USER kvm
sudo npm test
