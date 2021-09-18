/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let sp = 0;
  let index = nums.length - 1;
  for (; index > 0; index--) {
    if (nums[index] > nums[index - 1]) {
      let target = index;
      for (let i = nums.length - 1; i >= index; i--) {
        if (nums[index - 1] < nums[i]) {
          target = i;
          break;
        }
      }
      swap(target, index - 1, nums);
      sp = index;
      break;
    }
  }
  for (let i = sp, j = nums.length - 1; i < j; i++, j--) {
    swap(i, j, nums);
  }
  function swap(index1, index2, nums) {
    [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
  }
};

// @lc code=end
