/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 *  fn = max(fn-1, F(i,,,n))
 * F(i,,, n) 表示从 i到 n的乘积
 *  */ 
var maxProduct = function(nums) {
  if(nums.length <= 0) {
    return 0;
  }
  let f = [];
  f[-1] = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    f[i] = f[i-1];
    let multi = 1;
    let j = i;
    while(j >= 0)  {
      multi *= nums[j];
      j--;
      f[i] = Math.max(f[i], multi);
    }
  }
  return f[nums.length - 1];
};

/**
 * 官方解法
 */
var maxProduct = function(nums) {
  if(nums.length <= 1) {
    return nums[0] || 0;
  }
  let max = [nums[0]];
  let min = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    max[i] = Math.max(max[i-1] * num, num, min[i-1] * num);
    min[i] = Math.min(min[i-1] * num, num, max[i-1] * num);    
  }
  return Math.max(...max);
}
console.log(maxProduct([2,3,-2,4]));
// @lc code=end

