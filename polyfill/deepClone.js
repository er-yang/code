function deepClone(obj) {
  let result;
  if(typeof obj !== 'object' || obj === null) {
    return obj;
  }
  // if(set.has(obj)) {
  //   return obj;
  // }
  // set.add(obj);
  if(Array.isArray(obj)) {
    result = obj.map(value => deepClone(value));
  } else if(typeof obj === 'object') {
    result = Object.create(obj);
    for(let temp in obj) {
      result[temp] = deepClone(obj[temp]);
    }
  }
  return result;
}

let a = {arr: [1,2,3], obj: { copy: 'yes'}};
let b = deepClone(a);

console.log('----', a.arr === b.arr, JSON.stringify(b));