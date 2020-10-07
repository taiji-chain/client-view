#!/bin/bash
echo "Build the view"
yarn build
echo "Build completed in build folder, start copying to local server"
# local
rm -rf ~/light-chain/light-docker/local/web-client/build
cp -r ./build ~/light-chain/light-docker/local/web-client
