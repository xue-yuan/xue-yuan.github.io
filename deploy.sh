#! /bin/bash

yarn build
cp CNAME ./build

git add .
git commit -m "Update: $(date)"
git push

cd build/
git init
git add .
git commit -m "Update: $(date)"
git branch -M gh-pages
git push -u git@github.com:xue-yuan/xue-yuan.github.io.git gh-pages
