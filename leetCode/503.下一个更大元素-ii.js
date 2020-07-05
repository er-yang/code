/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let arr = nums.concat(nums.slice());
  let result = [];
  for(let i =0; i < nums.length; i++) {
      let j = i;
      while(j < arr.length && arr[j] <= nums[i]) {
          j++;
      }
      result[i] = j >= arr.length ? -1 : arr[j];
  }
  return result;
};
// @lc code=end

