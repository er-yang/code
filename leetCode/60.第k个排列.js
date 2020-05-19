/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  if(n <= 1) {
    return '1';
  }
  let nums = Array.from({length: n},(val, index) => index + 1);
  let result = [];
  let fibers = [];
  let cur = k;
  let fiber = nums.reduce((acc, cur) => {
    fibers.push(acc);
    return acc * cur;
  });
  fibers.push(fiber);
  for(let i = fibers.length - 2; i >= 0 && cur > 1; i-- ) {
    if(fibers[i] === cur) {
      result.push(nums[0]);
      nums.splice(0, 1);
      return result.concat(nums.reverse()).join('');
    }
    let temp = Math.floor((cur - 0.1) / fibers[i]);
    cur = cur - (temp * fibers[i]);
    result.push(nums[temp]);
    nums.splice(temp, 1);
  }
  result = result.concat(nums);

  return result.join('');
};
// @lc code=end

