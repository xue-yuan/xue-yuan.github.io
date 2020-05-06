# bin/bash

npm run build
cp CNAME ./dist

cd dist/
pwd
git init
git add .
git commit -m "production"
git push -f https://github.com/xue-yuan/xue-yuan.github.io.git
# git remote add origin https://github.com/xue-yuan/xue-yuan.github.io.git
# git push -u origin master

cd ../
git init
git add .
git commit -m "development"
git push -f https://github.com/xue-yuan/xue-yuan.github.io.git master:source


