const path = require('path');
const fs = require('fs');
const templateRouter = String(fs.readFileSync(path.resolve(__dirname, '../template/router.template.ts')));
const capitalizeFirstLetter = require('./capitalize-first-letter');
const camelCase = require('./camelcase');
module.exports = function generateRoutes(showCaseTargetPath, componentsMap, docsMeta) {
  let intro = [];
  let components = [];
  let routes = '';
  docsMeta['introduce'].en.title = 'Ant Design Mobile of Angular';
  docsMeta['introduce'].zh.title = 'Ant Design Mobile of Angular';
  for (const key in docsMeta) {
    intro.push({
      path    : `docs/${key}/en`,
      label   : docsMeta[key].en.title,
      language: 'en',
      order   : docsMeta[key].en.order
    });
    intro.push({
      path    : `docs/${key}/zh`,
      label   : docsMeta[key].zh.title,
      language: 'zh',
      order   : docsMeta[key].zh.order
    });
  }
  intro.sort((pre, next) => pre.order - next.order);
  fs.writeFileSync(path.join(showCaseTargetPath, `intros.json`), JSON.stringify(intro, null, 2));
  const reverseMap = {};
  for (const key in componentsMap) {
    const zh = {
      label   : componentsMap[key].title,
      path    : `components/${key}/zh`,
      zh      : componentsMap[key].subtitle,
      language: 'zh'
    };
    const en = {
      label   : componentsMap[key].title,
      path    : `components/${key}/en`,
      zh      : '',
      language: 'en'
    }
    if (!reverseMap[componentsMap[key].type]) {
      reverseMap[componentsMap[key].type] = [zh, en];
    } else {
      reverseMap[componentsMap[key].type].push(zh);
      reverseMap[componentsMap[key].type].push(en);
    }
    const moduleName = capitalizeFirstLetter(camelCase(key));
    routes += `  {'path': 'components/${key}', 'loadChildren': () => import('./${key}/index.module').then(m => m.Demo${moduleName}Module)},\n`;
  }
  for (const key in reverseMap) {
    components.push({
      name    : key,
      children: reverseMap[key]
    })
  }

  const sortMap = {
    General       : 0,
    Layout        : 1,
    Navigation    : 2,
    'Data Entry'  : 3,
    'Data Display': 4,
    Feedback      : 5,
    Gesture       : 6,
    Combination   : 7,
    Other         : 8,
  };
  components.sort((pre, next) => {
    return sortMap[pre.name] - sortMap[next.name];
  });

  components[0].zh = '布局';
  components[1].zh = '导航';
  components[2].zh = '数据录入';
  components[3].zh = '数据展示';
  components[4].zh = '操作反馈';
  components[5].zh = '手势';
  components[6].zh = '组合组件';
  components[7].zh = '其他';

  const fileContent = templateRouter.replace(/{{intro}}/g, JSON.stringify(intro, null, 2)).replace(/{{components}}/g, JSON.stringify(components, null, 2)).replace(/{{routes}}/g, routes);
  fs.writeFileSync(path.join(showCaseTargetPath, `router.ts`), fileContent);

};
