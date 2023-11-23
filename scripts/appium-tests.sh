#!/bin/bash
set -ex

echo "Put user in group KVM and run tests"

sudo usermod -aG kvm runner
sudo gpasswd -a $USER kvm
sudo newgrp kvm
sudo npm test
