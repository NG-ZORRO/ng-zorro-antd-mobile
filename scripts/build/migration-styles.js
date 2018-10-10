const fs = require('fs-extra');
const path = require('path');

const sourcePath = path.resolve(__dirname, `../../publish`);
const targetPath = path.resolve(__dirname, `../../publish/src`);

fs.mkdirsSync(targetPath);
fs.copySync(path.resolve(sourcePath, `style`), path.resolve(targetPath, `style`));
fs.copySync(path.resolve(sourcePath, `ng-zorro-antd-mobile.css`), path.resolve(targetPath, `ng-zorro-antd-mobile.css`));
fs.copySync(path.resolve(sourcePath, `ng-zorro-antd-mobile.min.css`), path.resolve(targetPath, `ng-zorro-antd-mobile.min.css`));
fs.outputFileSync(path.resolve(targetPath, `ng-zorro-antd-mobile.less`), `@import "../style/index.less";
@import "../components.less";`);
