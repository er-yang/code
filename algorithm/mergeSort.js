// 方式1 消耗过多空间
function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length /2);
  let arr1 = arr.slice(0, middle);
  let arr2 = arr.slice(middle);
  return merge(mergeSort(arr1), mergeSort(arr2));
}
function merge(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;
  let result = [];
  while(index1 < arr1.length || index2 < arr2.length) {
    if(index1 >= arr1.length) {
      result.push(arr2[index2]);
      index2++;
      continue;
    }
    if(index2 >= arr2.length) {
      result.push(arr1[index1]);
      index1++;
      continue;
    }
    if(arr1[index1] < arr2[index2]) {
      result.push(arr1[index1]);
      index1++;
    } else {
      result.push(arr2[index2]);
      index2++;
    }
  }
  return result;
}
console.log(mergeSort([6, 1, 6, 9, 23, 1,6,9, 3,8,4,7,10]) + '');
