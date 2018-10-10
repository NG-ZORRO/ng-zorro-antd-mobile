module.exports = function angularNonBindAble(content, name) {
  if (name && name.includes('introduce')) {
    return content;
  } else {
    return content.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
  }
};
