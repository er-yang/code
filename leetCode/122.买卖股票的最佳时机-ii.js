/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let f = [0];
    f[-1] = 0
    for(let i=1; i< prices.length; i++) {
      let max = f[i -1];
      for(let j = i - 1; j >= 0; j--) {
        let temp = prices[i] - prices[j] + f[j -1];
        max = Math.max(max, temp);
      }
      f[i] = max;
    }
    return f[prices.length - 1];
};
// @lc code=end

