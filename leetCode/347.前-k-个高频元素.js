/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = {};
  let result = [];
  for(let num of nums) {
    if(map[num] !== undefined) {
      map[num] += 1;
    }else {
      map[num] = 1;
    }
  }
  var heapify = function (arr, node, size) {
    let left = 2* node + 1;
    let right = 2* node + 2;
    let temp = node;
    if(left < size && map[arr[left]] > map[arr[temp]]) {
      temp = left;
    }
    if(right < size && map[arr[right]] > map[arr[temp]]) {
      temp = right;
    }
    if(temp !== node) {
      swap(arr, node ,temp);
      heapify(arr, temp, size)
    }
  }
  let arr = Object.keys(map);
  for(let i = Math.floor(arr.length / 2) -1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
  for(let j = 1; j <= k; j ++) {
    result.push(arr[0]);
    swap(arr, arr.length - j , 0);
    heapify(arr, 0, arr.length - j)
  }

  function swap(arr, index1, index2) {
    [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
  }
  return result;
};
// @lc code=end

