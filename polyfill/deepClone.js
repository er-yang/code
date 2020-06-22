function deepClone(obj) {
  let result;
  if((typeof obj !== 'object' && typeof obj !== 'function') || obj === null) {
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
  } else if(typeof obj === 'function'){
    result = new Function();
    result.const
  }
  return result;
}

let a = {arr: [1,2,3], obj: { copy: 'yes'}, r: new RegExp('23')};
let b = deepClone(a);

console.log('----', a.arr === b.arr, JSON.stringify(b));