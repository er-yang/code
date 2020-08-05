/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

 // fn = 
var rob = function(nums) {
  let f0 = 0;
  let f1 = 0;
  let fn = 0;
  for(let i = 0; i < nums.length; i++) {
    fn = Math.max(f1, f0 + nums[i]);
    f0 = f1;
    f1 = fn;
  }
  return fn;
};
// @lc code=end

