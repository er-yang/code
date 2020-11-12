/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//  原地交换，利用传入数组空间
var firstMissingPositive = function(nums) {
  let length = nums.length;
  for(let i=0; i < nums.length; i++) {
    if(nums[i] <= 0) {
      nums[i] = length + 1;
    }
  }
  for(let i=0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    if(num <= length) {
      nums[num - 1] = - Math.abs(nums[num - 1]);
    }
  }
  for(let i=0; i < nums.length; i++) {
    if(nums[i] > 0 ) {
      return i + 1;
    }
  }
  return length + 1;

};
// @lc code=end

