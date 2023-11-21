#!/bin/bash
set -ex

echo "Install and Running Appium Server as a Background process"

sudo npx wdio run ./wdio.conf.js --spec
