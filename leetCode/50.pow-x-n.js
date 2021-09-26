/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  const positive = n < 0;
  let temp = Math.abs(n);
  let result = x;
  if (temp > 1) {
    let odd = !!(temp % 2);
    let half = odd ? (temp - 1) / 2 : temp / 2;
    let halfPow = myPow(x, half);
    result = halfPow * halfPow;
    if (odd) {
      result = result * x;
    }
  }
  if (positive) {
    result = 1 / result;
  }
  return result;
};
// @lc code=end
