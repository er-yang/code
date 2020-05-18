function insertSort(arr) {
 let result = [];
 for(let i = 0; i < arr.length; i++) {
   let j = 0;
   for(; j < result.length; j++) {
     if(arr[i] < result[j]) {
       break;
     }
   }
   result.splice(j, 0, arr[i]);
 }
 return result; 
}

console.log(insertSort([1,9,23,1,4,6,7]));