/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let n = nums.length;
  let j = n-1;
  for(let i = 0; i <= j; i++) {
    if(nums[i] === val) {
      while(nums[j] === val && j > i) {
        j--;
      }
      swap(nums,i,j);
      j--;
    }
  }
  return j + 1;
};
var swap = function(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
// 3 2 2 3 
// @lc code=end

