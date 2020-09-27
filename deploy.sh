#!/bin/bash
echo "Build the view"
yarn build
echo "Build completed in build folder, start copying to local server"
rm -rf ~/light-chain/light-docker/local/web-client/build
cp -r ./build ~/light-chain/light-docker/local/web-client
# ssh test2 "rm -rf ~/light-chain/light-config-test/test2/maproot/build"
# scp -r ./build test2:/home/steve/light-chain/light-config-test/test2/maproot
echo "Copied!"
