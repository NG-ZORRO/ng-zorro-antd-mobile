export function getVelocity() {
  return ((minInterval = 30, maxInterval = 100) => {
    let _time = 0;
    let _y = 0;
    let _velocity = 0;
    const recorder = {
      record: y => {
        const now = +new Date();
        _velocity = (y - _y) / (now - _time);
        if (now - _time >= minInterval) {
          _velocity = now - _time <= maxInterval ? _velocity : 0;
          _y = y;
          _time = now;
        }
      },
      getVelocity: y => {
        if (y !== _y) {
          recorder.record(y);
        }
        return _velocity;
      }
    };
    return recorder;
  })();
}
