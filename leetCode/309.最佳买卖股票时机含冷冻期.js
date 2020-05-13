/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let f = [];
  f[0] = 0;
  f[1] = 0;
  for(let i = 2; i <= prices.length; i++) {
    let max = f[i - 1];
    for(let j = i - 1; j >= 1; j --) {
      let profit = prices[i-1] - prices[j - 1] + (f[j - 2] || 0);
      max = Math.max(max, profit);
    }
    f[i] = max;
  }
  return f[prices.length];
};
maxProfit([1,2,3,0,2]);
// @lc code=end

