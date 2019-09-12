export function getAllStyles(element) {
  return window.getComputedStyle(element);
}
export function getStyle(element, prop) {
  return getAllStyles(element)[prop];
}
export function isStaticPositioned(element) {
  return (getStyle(element, 'position') || 'static') === 'static';
}

export function getOffsetParent(element) {
  let offsetParentEl = element.offsetParent || document.documentElement;
  while (offsetParentEl && offsetParentEl !== document.documentElement && isStaticPositioned(offsetParentEl)) {
    offsetParentEl = offsetParentEl.offsetParent;
  }
  return offsetParentEl || document.documentElement;
}

export function getOffset(element) {
  let elBcr = element.getBoundingClientRect();
  let viewportOffset = {
    top: window.pageYOffset - document.documentElement.clientTop,
    left: window.pageXOffset - document.documentElement.clientLeft
  };
  let elOffset = {
    height: elBcr.height || element.offsetHeight,
    width: elBcr.width || element.offsetWidth,
    top: elBcr.top + viewportOffset.top,
    bottom: elBcr.bottom + viewportOffset.top,
    left: elBcr.left + viewportOffset.left,
    right: elBcr.right + viewportOffset.left
  };
  return elOffset;
}

export function getPosition(element) {
  let elPosition;
  let parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
  if (getStyle(element, 'position') === 'fixed') {
    elPosition = element.getBoundingClientRect();
  } else {
    let offsetParentEl = getOffsetParent(element);
    elPosition = getOffset(element);
    if (offsetParentEl !== document.documentElement) {
      parentOffset = getOffset(offsetParentEl);
    }
    parentOffset.top += offsetParentEl.clientTop;
    parentOffset.left += offsetParentEl.clientLeft;
  }
  elPosition.top -= parentOffset.top;
  elPosition.bottom -= parentOffset.top;
  elPosition.left -= parentOffset.left;
  elPosition.right -= parentOffset.left;
  return elPosition;
}

export function getPositionElements(hostElement, targetElement, placement, appendToBody) {
  let hostElPosition = appendToBody ? getOffset(hostElement) : getPosition(hostElement);
  let targetElStyles = getAllStyles(targetElement);
  let targetElBCR = targetElement.getBoundingClientRect();
  let placementPrimary = placement.split('-')[0] || 'top';
  let placementSecondary = placement.split('-')[1] || 'center';
  let targetElPosition = {
    height: targetElBCR.height || targetElement.offsetHeight,
    width: targetElBCR.width || targetElement.offsetWidth,
    top: 0,
    bottom: targetElBCR.height || targetElement.offsetHeight,
    left: 0,
    right: targetElBCR.width || targetElement.offsetWidth
  };
  switch (placementPrimary) {
    case 'top':
      targetElPosition.top =
        hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
      break;
    case 'bottom':
      targetElPosition.top = hostElPosition.top + hostElPosition.height;
      break;
    case 'left':
      targetElPosition.left =
        hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
      break;
    case 'right':
      targetElPosition.left = hostElPosition.left + hostElPosition.width;
      break;
  }
  switch (placementSecondary) {
    case 'top':
      targetElPosition.top = hostElPosition.top;
      break;
    case 'bottom':
      targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
      break;
    case 'left':
      targetElPosition.left = hostElPosition.left;
      break;
    case 'right':
      targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
      break;
    case 'center':
      if (placementPrimary === 'top' || placementPrimary === 'bottom') {
        targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
      } else {
        targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
      }
      break;
  }
  targetElPosition.top = Math.round(targetElPosition.top);
  targetElPosition.bottom = Math.round(targetElPosition.bottom);
  targetElPosition.left = Math.round(targetElPosition.left);
  targetElPosition.right = Math.round(targetElPosition.right);
  return targetElPosition;
}
