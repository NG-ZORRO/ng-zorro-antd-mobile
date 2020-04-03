module.exports = function angularNonBindAble(content, name) {
  if (name && name.includes('introduce')) {
    return content.replace(/<style>([\s\S]*)<\/style>/g, '');
  } else {
    return content.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
  }
};
