function heapSort(arr) {
  buildHeap(arr);
  for(let i = arr.length - 1; i > 0; i--) {
    swap(arr, i, 0);
    heapify(arr, 0, i);
  }
  return arr;
}

function buildHeap(arr) {
  for(let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
  return arr;
}

// 堆化
function heapify (arr, root, size) {
  let left = root * 2 + 1;
  let right = root * 2 + 2;
  let largeNode = root;
  if(left < size && arr[left] > arr[largeNode]) {
    largeNode = left;
  }
  if(right < size && arr[right] > arr[largeNode]) {
    largeNode = right;
  }
  if(largeNode !== root) {
    swap(arr, largeNode, root);
    heapify(arr, largeNode, size);
  }
}

function swap(arr, index1, index2) {
  [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
}

console.log(heapSort([6, 1, 6, 9, 23, 1,6,9, 3,8,4,7,10]) + '');
