/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if(n === 2) {
    return 1;
  }
  if(n === 3) {
    return 2;
  }
  let res = 1;
  while(n > 2) {
    if(n > 4) {
      res *= 3;
      n = n - 3;
    }
    if(n === 3 || n === 4 || n === 2) {
      res *= n;
      return res;
    }
  }
  return res;
};
console.log(integerBreak(6));
// @lc code=end