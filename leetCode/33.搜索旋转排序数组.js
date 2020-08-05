/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if(nums.length <= 0) {
    return -1;
  }
  let helper = function(start, end) {
    let middle = Math.floor((start+end) / 2);
    if(nums[middle] === target) {
      return middle;
    }
    if(start >= end || start >= nums.length || end < 0) {
      return -1;
    }
    if((nums[middle] > nums[end] && (target > nums[middle] || target <= nums[end])) || 
      nums[middle] < nums[end] && (target > nums[middle] && target <= nums[end])) {
      return helper(middle + 1, end);
    } else {
       return helper(start, middle - 1);
     }
  }
  return helper(0, nums.length - 1);
};

// console.log(search([9,0,2,7,8], 3))
// @lc code=end

