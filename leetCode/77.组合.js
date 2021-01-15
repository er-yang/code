/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let result = [];
  var pick = (start, pre) => {
    if(start > n || pre.length === k) {
      pre.length === k && result.push(pre);
      return;
    }
    for (let i = start; i <= n; i++) {
      let temp = pre.slice();
      temp.push(i);
      pick(i + 1, temp);
    }
  }
  pick(1, []);
  return result;
};
// console.log(JSON.stringify(combine(0, 0)));
// @lc code=end

