function insertKeyFrame(rule, className) {
  const style = document.createElement('style');
  style.setAttribute('class', className);
  style.innerHTML = rule;
  document.body.appendChild(style);
}

function deleteKeyFrame(className) {
  const styleDom = document.getElementsByClassName(className);
  while (styleDom.length > 0) {
    styleDom[0].remove();
  }
}

function getWidthHeight() {
  const w = window;
  const d = document;
  const e = d.documentElement;
  const g = d.getElementsByTagName('body')[0];
  return {
    width: w.innerWidth || e.clientWidth || g.clientWidth,
    height: w.innerHeight || e.clientHeight || g.clientHeight
  };
}

function getTextWidth(text, font) {
  const _dom = document.createElement('div');
  _dom.innerHTML = text;
  _dom.style.position = 'absolute';
  _dom.style.left = '-9999';
  _dom.style.whiteSpace = 'nowrap';
  _dom.style.fontSize = font;
  document.body.appendChild(_dom);
  const _w = _dom.clientWidth + 10;
  document.body.removeChild(_dom);
  return _w;
}

export { insertKeyFrame, deleteKeyFrame, getWidthHeight, getTextWidth };
