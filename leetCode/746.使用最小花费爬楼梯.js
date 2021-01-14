/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
// fn = Math.min(fn-1, fn-2)
var minCostClimbingStairs = function(cost) {
  // let help = (end) => {
  //   if(end < 0) {
  //     return 0;
  //   }
  //   if(end <= 0) {
  //     return cost[end];
  //   }
  //   return Math.min(cost[end] + help(end - 1), cost[end] + help(end - 2), help(end - 1))
  // }
  // return help(cost.length - 1);
  let length = cost.length;
  let f = [0, 0];
  for (let i = 2; i <= cost.length; i++) {
    f[i] = Math.min(f[i - 1] + cost[i - 1], f[i -2] + cost[i - 2]);
  }
  return f[length];
};
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]  ))
// @lc code=end

