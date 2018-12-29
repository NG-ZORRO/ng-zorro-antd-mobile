const fs = require('fs-extra');
const path = require('path');
const less = require('less');
const LessPluginCleanCSS = require('less-plugin-clean-css');

function compileLess(content, savePath, min) {
  return new Promise((resolve, reject) => {
    const plugins = [];
    if (min) {
      const cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});
      plugins.push(cleanCSSPlugin);
    }
    return less.render
      .call(less, content, {plugins: plugins, javascriptEnabled: true})
      .then(({css}) => {
        fs.writeFileSync(savePath, css);
        resolve();
      })
      .catch(err => reject(err));
  });
}

const sourcePath = path.resolve(__dirname, '../../components');
const targetPath = path.resolve(__dirname, '../../publish');

const targetFolder = fs.readdirSync(targetPath);
let componentsLessContent = '';
targetFolder.forEach(dir => {
  if (fs.existsSync(`${sourcePath}/${dir}/style`)) {
    const styleFolder = fs.readdirSync(`${sourcePath}/${dir}/style`);
    let addon = '';
    styleFolder.forEach((value, key) => {
      if (value.includes('addon')) {
        addon = styleFolder.splice(key, 1);
      }
    });

    if (addon) {
      styleFolder.push(addon[0]);
    }

    styleFolder.forEach(styleF => {
      if (styleF.indexOf('.less') != -1 || styleF.indexOf('.scss') != -1) {
        componentsLessContent += `@import "./${path.join(dir, 'style', styleF)}";\n`
      }
    });
    fs.copySync(`${sourcePath}/${dir}/style`, `${targetPath}/${dir}/style`);
  }
})
fs.copySync(path.resolve(sourcePath, 'style'), path.resolve(targetPath, 'style'));
fs.writeFileSync(`${sourcePath}/components.less`, componentsLessContent);
fs.writeFileSync(`${targetPath}/components.less`, componentsLessContent);
fs.writeFileSync(`${targetPath}/ng-zorro-antd-mobile.less`, fs.readFileSync(`${sourcePath}/ng-zorro-antd-mobile.less`));

const lessContent = `@import "${path.join(targetPath, 'ng-zorro-antd-mobile.less')}";`;
compileLess(lessContent, path.join(targetPath, 'ng-zorro-antd-mobile.css'), false);
compileLess(lessContent, path.join(targetPath, 'ng-zorro-antd-mobile.min.css'), true);
