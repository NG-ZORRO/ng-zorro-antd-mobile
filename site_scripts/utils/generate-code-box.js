const fs = require('fs');
const path = require('path');
const camelCase = require('./camelcase');
const template = String(fs.readFileSync(path.resolve(__dirname, '../template/code-box.template.html')));
const capitalizeFirstLetter = require('./capitalize-first-letter');
const generateIframeDemo = require('./generate-iframe-demo');
const generateCode = require('./generate-code');

module.exports = function generateCodeBox(showCaseComponentPath, component, language, code, keys, titles) {
  let output = template;
  output = output.replace(/{{iframeDemoContainer}}/g, generateIframeDemo(showCaseComponentPath, component, language, keys, titles));
  output = output.replace(/{{codeBox}}/g, code);
  return output;
};
