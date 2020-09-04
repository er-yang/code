// Function.prototype.bind = function (mthis, ...args) {
//   return this.call(mthis, ...args);
// }

function diffJson(a, b) {
  let keys = Object.keys(a);
  for (let key of keys) {
    if (typeof a[key] === 'object') {
      if (!diffJson(a[key], b[key])) {
        return false;
      }
      continue;
    } else if (Array.isArray(a[key])) {
      if (a[key].length > 0 && a[key].findIndex((item) => !diffJson(a[key], b[key])) < -1) {
        return false;
      }
    } else if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
console.log('---', diffJson({ a: 1, b: { c: [1, 2, 3] } }, { a: 1, b: { c: [1, 2, 3] } }));
