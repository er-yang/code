/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  if(nums.length < 2) {
    return 0;
  }
  let f = [[nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    let fn1 = f[i - 1];
    let fn = [];
    for (let j = 0; j < fn1.length; j++) {
      let sum = fn1[j] + num;
      fn.push(sum);
      if((k === 0 && sum === 0) || sum % k === 0) {
        return true;
      }
    }
    fn.push(num);
    f.push(fn);
  }
  return false;
};
// console.log(checkSubarraySum([0,0], 0));
// @lc code=end

