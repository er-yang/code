/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n <= 1) {
    return n;
  }
  let f0 = 0;
  let f1 = 1;
  let fn = 0;
  let i = 1;
  while(i < n) {
    fn = f1 + f0;
    f0 = f1;
    f1 = fn;
    i++
  }
  return fn;
};
// @lc code=end

