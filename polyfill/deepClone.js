// function deepClone(obj) {
//   let result;
//   if((typeof obj !== 'object' && typeof obj !== 'function') || obj === null) {
//     return obj;
//   }
//   // if(set.has(obj)) {
//   //   return obj;
//   // }
//   // set.add(obj);
//   if(Array.isArray(obj)) {
//     result = obj.map(value => deepClone(value));
//   } else if(typeof obj === 'object') {
//     result = Object.create(obj);
//     for(let temp in obj) {
//       result[temp] = deepClone(obj[temp]);
//     }
//   } else if(typeof obj === 'function'){
//     result = new Function();
//     result.const
//   }
//   return result;
// }

function baseClone(obj) {
  if(typeof obj === 'boolean' || typeof obj === 'number' || typeof obj === 'string' || !obj) {
    return obj;
  }
  let result;
  if(Array.isArray(obj)) {
    result = obj.map(item => baseClone(item));
  }  else{
    result =  Object.create(obj._proto_) ;
    for(let property of Object.keys(obj)) {
      if(obj.hasOwnProperty(property)) {
        result[property] = baseClone(obj[property]);
      }
    }
    for(let key of Object.getOwnPropertySymbols(obj)) {
      result[key] = obj[key];
    }
  }
  return result;
}

let a = {arr: [1,2,3], obj: { copy: 'yes'}, r: /23/};
// let b = baseClone(a);

// console.log('----',  b.r.test('23'), JSON.stringify(b));
let c = new RegExp('23');
for(let b in c) {console.log(b)}