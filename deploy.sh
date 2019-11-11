cd $(dirname "$0")/public/frontend
npm install
npm audit fix --force
npm run build
mv build/* ..
rm -rf build
git remote add gandi git+ssh://XXXXX@git.sd3.gpaas.net/default.git
git push gandi master
ssh XXXXX@git.sd3.gpaas.net deploy default.git
