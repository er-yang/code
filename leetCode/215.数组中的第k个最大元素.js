/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 大顶堆
// var findKthLargest = function(nums, k) {
//   nums = buildHeap(nums);
//   for(let i =1; i <= k; i++) {
//     swap(nums, 0, nums.length - i);
//     heapify(nums, 0, nums.length - i);
//   }
//   return nums[nums.length - k];
// };
var buildHeap = function(nums) {
  for(let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
    heapify(nums, i, nums.length);
  }
  return nums;
}
var heapify = function(arr, root, length) {
  let left = root * 2 + 1;
  let right = root * 2 + 2;
  let largeNode = root;
  if(left < length && arr[left] > arr[largeNode]) {
    largeNode = left;
  }
  if(right < length && arr[right] > arr[largeNode]) {
    largeNode = right;
  }
  if(largeNode !== root) {
    swap(arr, root, largeNode);
    heapify(arr, largeNode, length);
  }
}
var swap = function(arr, i, j ) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
// 快速排序
var findKthLargest = function(nums, k) {
  var quickSourt = function(nums, left, end) {
    let pivotIndex = left;
    let pivot = nums[pivotIndex];
    left +=1;
    while(left < end) {
      while (left < end && nums[end] >= pivot) {
        end--;
      }
      while(left < end && nums[left] < pivot) {
        left++;
      }

      if(left < end) {
        swap(nums, left, end);
      }
    }
    swap(nums, pivotIndex, left);
    const diff = nums.length - left;
    if(diff === k) {
      return nums[left];
    }
    if(diff < k ) {
      return quickSourt(nums, pivotIndex , left - 1);
    }
    if(diff > k ) {
      return quickSourt(nums, left + 1, end );
    }
  }
  return quickSourt(nums, 0, nums.length -1);
};
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4 ));
// @lc code=end

