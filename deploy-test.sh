#!/bin/bash
echo "Build the view"
yarn build
echo "Build completed in build folder, start copying to test server"
# test
ssh test3 "rm -rf ~/light-chain/light-docker/test3/web-client/build"
scp -r ./build test3:/home/steve/light-chain/light-docker/test3/web-client
echo "Copied!"
