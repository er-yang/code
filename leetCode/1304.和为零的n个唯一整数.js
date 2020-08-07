/*
 * @lc app=leetcode.cn id=1304 lang=javascript
 *
 * [1304] 和为零的N个唯一整数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let result = [];
  for(let i =1; i <= n - 1; i += 2) {
    result.push(i *n, -1 * i * n);
  }
  if(result.length < n) {
    result.push(0);
  }
  return result;
};
// @lc code=end

