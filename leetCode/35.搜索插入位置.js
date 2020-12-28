/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if(nums.length <= 0) {
    return 0;
  }
  let start = 0;
  let end = nums.length - 1;
  let mid, res = nums.length;
  while(start <= end) {
    mid = Math.floor((end - start) / 2) + start;

    if(nums[mid] >= target) {
      res = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return res;
};
// @lc code=end

