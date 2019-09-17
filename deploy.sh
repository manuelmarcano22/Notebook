#cd demo/
bundle exec jekyll build
git checkout master
git add -A
git commit -m "Base Sources :octocat:"
git push -f origin master
cd _site
touch .nojekyll
git init
git remote add origin https://github.com/manuelmarcano22/Notebook.git
git checkout -B  gh-pages
git add -A
git commit -am "Build :octocat:"
git push   -f origin gh-pages

#From http://stackoverflow.com/questions/28249255/how-do-i-configure-github-to-use-non-supported-jekyll-site-plugins/28252200#28252200

