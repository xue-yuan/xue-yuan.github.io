# bin/bash

npm run build
cp CNAME ./dist
git init
git add .
git commit -m "development"
git push -f https://github.com/xue-yuan/xue-yuan.github.io.git master:source

cd dist/
git init
git add .
git commit -m "production"
git remote add origin https://github.com/xue-yuan/xue-yuan.github.io.git
git push -u origin master

pwd
