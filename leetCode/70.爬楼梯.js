/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
// //   let fn = [1, 2];
// //   if(n <= 2) {
// //     return fn[n - 1] || 0;
// //   }
// //   for(let i = 2; i < n; i++) {
// //     fn[i] = (fn[i-1] + fn[i-2]);
// //   }
// //   return fn[n-1];
// // };
var climbStairs = function(n) {
  let f1 = 1;
  let f0 = 1;
  let fn = 1;
  for(let i = 2; i <= n; i++) {
    fn = f1 + f0;
    f0 = f1;
    f1 = fn;
  }
  return fn;
};
// @lc code=end

