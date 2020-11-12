/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // fOnetimes 仅买一次的最大利润
  let f = [0];
  let fOneTimes = [0];
  f[-1] = fOneTimes[-1] = 0;
  let isUp = true;
  for(let i = 1; i < prices.length; i++) {
    let max = f[i - 1];
    let maxOneTimes = fOneTimes[i - 1];
    if(prices[i] < prices[i- 1]) {
      isUp = false;
    }
    for(let j = i - 1; j >= 0; j--) {
      let diff = prices[i] - prices [j];
      let profit = prices[i] - prices[j] + fOneTimes[j - 1];
      maxOneTimes = Math.max(maxOneTimes, diff);
      max = Math.max(max, profit);
      if(diff < 0 ) {
        break;
      }
      if(isUp) {
        max = Math.max(fOneTimes[j] + diff, max);
        maxOneTimes = max;
        break;
      }
    }
    f[i] = max;
    fOneTimes[i] = maxOneTimes;
  }
  return f[prices.length - 1];
};
// console.log(maxProfit([0, 1, 2, 3, 4,5]));
// @lc code=end

