echo '-- compiling TS'
tsc --build .\\tsconfig.json;

echo '- compiling LESS'
lessc ./src/less/styles.less ./dist/styles.css;

echo 'copying required files..'
cp ./manifest.json ./dist/
cp ./popup.html ./dist/
