function throttle(fn, timer) {
  let lastTime = 0;
  let timerId = null;
  return (...args) => {
    let now = new Data().getTime();
    if(now - lastTime >= timer) {
      clearTimeout(timerId);
      fn(...args);
      lastTime = now;
    } else {
      if(timerId) {
        return;
      };
      let timerId = setTimeout(() => {
        fn(...args);
        lastTime = now;
      }, timer - now + lastTime)
    }
  };
}

function throttle(fn, timer) {
  let timerId = null;
  let lastTime = 0;
  return (...args) => {
    let now = new Data().getTime();
    if(now - lastTime >= timer) {
      lastTime = now;
      return fn.apply(this, args);
    }
    let diff = timer - (now - lastTime);
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, diff);
  }
}