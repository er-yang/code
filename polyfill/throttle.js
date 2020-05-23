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