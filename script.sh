#!/usr/bin/env bash

npm i &> /dev/null
rm -rf spec
mv ./testPackage/spec ./spec
npm test
