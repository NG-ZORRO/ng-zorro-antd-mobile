export function getEventTarget(event) {
  if (
    event.type === 'mousedown' ||
    event.type === 'mousemove' ||
    event.type === 'mouseup' ||
    event.type === 'mouseleave'
  ) {
    return event;
  } else {
    if (event && event.changedTouches && event.changedTouches[0]) {
      return event.changedTouches[0];
    }
  }
}
