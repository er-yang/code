/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(nums.length === 0) {
    return [];
  }
  let sum = nums[0];
  let result = nums[0];
  for(let i = 1; i < nums.length; i++) {
    sum += nums[i];
    if(sum < nums[i]) {
      sum = nums[i];
    }
    result = Math.max(sum, result);
  }
  return result;
 };
// @lc code=end

