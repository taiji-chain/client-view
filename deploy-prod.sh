#!/bin/bash
echo "Build the view"
yarn build
echo "Build completed in build folder, start copying to prod server"
# prod
ssh taiji3 "rm -rf ~/light-chain/light-config-prod/taiji3/web-client/build"
scp -r ./build taiji3:/home/steve/light-chain/light-config-prod/taiji3/web-client
echo "Copied!"
