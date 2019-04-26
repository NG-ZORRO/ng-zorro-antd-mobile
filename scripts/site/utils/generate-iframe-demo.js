const fs = require('fs');
const path = require('path');
const camelCase = require('./camelcase');
const template = String(fs.readFileSync(path.resolve(__dirname, '../template/iframe-demo.template.html')));
const capitalizeFirstLetter = require('./capitalize-first-letter');

module.exports = function generateIframeDemo(showCaseComponentPath, component, language, keys, titles) {
  let output = template;
  fs.writeFileSync(path.join(showCaseComponentPath, `${component}-demo-${language}.component.html`), generateCard(component, keys, titles));
  const demoComponent = generateDemoComponent(component, language);
  fs.writeFileSync(path.join(showCaseComponentPath, `${component}-demo-${language}.component.ts`), demoComponent);
  return output;
};

function generateDemoComponent(component, language) {
  const demoComponentTemplate = String(fs.readFileSync(path.resolve(__dirname, '../template/demo-container-component.template.ts')));
  let output = demoComponentTemplate;
  output = output.replace(/{{component}}/g, component);
  output = output.replace(/{{template}}/g, `${component}-demo-${language}.component`);
  output = output.replace(/{{componentName}}/g, generateComponentName(component, language));
  
  return output;
}

function generateComponentName(component, language) {
  return `Demo${componentName(component)}Demo${componentName(language)}Component`
}

function componentName(component) {
  return camelCase(capitalizeFirstLetter(component));
}

function generateCard(component, keys, titles) {
  let linkArray = [];
  for(let j = 0,len = keys.length; j < len; j++) {
    const key = keys[j];
    const title = titles[j];
    linkArray.push(
      {
        content: `
        <div class="demo-preview-item" id="${component}-demo-${j}">\n
        <div class="demoTitle">${title}</div>\n
        <div class="demoContainer">\n
        <demo-${component}-${key}></demo-${component}-${key}>\n
        </div>\n
        </div>\n`,
      }
    );
  }
  const links = linkArray.map(link => link.content).join('');
  return `${links}`;
}