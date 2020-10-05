#!/bin/bash
echo "Build the view"
yarn build
echo "Build completed in build folder, start copying to local server"
# local
rm -rf ~/light-chain/light-docker/local/web-client/build
cp -r ./build ~/light-chain/light-docker/local/web-client
# test
ssh test3 "rm -rf ~/light-chain/light-docker/test3/web-client/build"
scp -r ./build test3:/home/steve/light-chain/light-docker/test3/web-client
# prod

echo "Copied!"
