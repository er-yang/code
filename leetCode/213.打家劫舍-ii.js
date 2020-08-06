/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length < 1) {
    return 0;
  }
  let f0 = 0;
  let f1 = 0;
  let fn = 0;
  let m0 = 0;
  let m1 = 0;
  let mn = 0;
  for(let i = 0; i < nums.length; i++) {
    fn = Math.max(f1, f0 + nums[i]);
    f0 = f1;
    f1 = fn;
    if(i >= 1 && i < nums.length - 2) {
        mn = Math.max(m1, m0 + nums[i]);
        m0 = m1;
        m1 = mn;
    }
  }
  return Math.max(f0, mn + nums[nums.length - 1]);
};
// @lc code=end

