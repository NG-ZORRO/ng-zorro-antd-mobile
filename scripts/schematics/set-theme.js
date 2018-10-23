const fs = require('fs-extra');
const path = require('path');

const theme = fs.readFileSync(path.resolve(__dirname, `../../components/style/themes/default.less`), 'utf8');
fs.outputFileSync(
  path.resolve(__dirname, `../../schematics/utils/custom-theme.ts`),
  `export function createCustomTheme() {
  return \`@import "../node_modules/ng-zorro-antd-mobile/src/ng-zorro-antd-mobile.less";
${theme.replace(/`/g, '\\`')}
\`;
}
`
);
