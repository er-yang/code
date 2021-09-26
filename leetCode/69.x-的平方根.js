/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }
  for (let i = x / 2; i > 0; i /= 2) {
    i = Math.floor(i);
    if (i * i === x) {
      return i;
    }
    if (i * i < x) {
      while (i * i <= x) {
        i += 1;
      }
      return i - 1;
    } else {
      continue;
    }
  }
};
// @lc code=end
