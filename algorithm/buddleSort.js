function buddleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i; j++ ) {
      if(arr[j] > arr[j + 1]) {
        swap(arr, j + 1, j);
      }
    }
  }
  return arr;
}

function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}
console.log(buddleSort([1, 4,9,2,3,5,3,2]))