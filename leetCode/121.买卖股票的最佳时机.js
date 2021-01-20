/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// fn = max(n, n-1) + fn-1;
var maxProfit = function(prices) {
  let f0 =0;
  let fn =0;
  let min = prices[0];
  for(let i = 1; i < prices.length; i ++) {
    let temp = prices[i] - min;
    fn = Math.max(temp, f0);
    f0 = fn;
    min = Math.min(min, prices[i]);
  }
  return fn;
  //  leetcode solution
  // let min = prices[0]; let max = 0;
  // for(let i = 1; i < prices.length; i++) { 
  //     const cur = prices[i];
  //     if (cur < min) {
  //         min = cur;
  //     } else {
  //         max = Math.max(cur - min, max)
  //     }
  // }
  // return max;
};

// @lc code=end

