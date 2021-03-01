/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {

  let mul = 1;
  let sum = 0;
  for(; mul < num / 2; mul++) {
    if(num % mul === 0) {
      sum += mul;
    }
    if(sum > num / 2) {
      return false;
    }
  }
  return sum === num / 2;
};
// console.log(checkPerfectNumber(28))
// @lc code=end

