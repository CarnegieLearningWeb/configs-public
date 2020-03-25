const fs = require('fs');
const path = require('path');

const dest = 'dist/tslint';

if(fs.existsSync('dist')) {
    const files = fs.readdirSync(dest);
    for(const file of files) {
        fs.unlinkSync(path.join(dest, file));
    }

    fs.rmdirSync('dist/tslint');
    fs.rmdirSync('dist');
}
fs.mkdirSync('dist');
fs.mkdirSync('dist/tslint');
fs.copyFileSync('tslint-base.json', 'dist/tslint/tslint-base.json');
fs.copyFileSync('tslint-config.json', 'dist/tslint/tslint-config.json');
fs.copyFileSync('package-lock.json', 'dist/tslint/package-lock.json');
fs.copyFileSync('package.json', 'dist/tslint/package.json');

