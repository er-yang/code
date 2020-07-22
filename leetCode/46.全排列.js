/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

  if(nums.length <= 1) {
    return [nums];
  }
  let result = [];
  for(let i =0; i < nums.length; i++) {
    let leftItem = [...nums.slice(0, i), ...nums.slice(i + 1)];
    result = result.concat(permute(leftItem).map(item => [nums[i], ...item]));
  }
  return result;
};
// @lc code=end

