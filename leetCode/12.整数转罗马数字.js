/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if(num === 0) {
    return ''
  }
  let str = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  let n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  for(let i = n.length-1; i >= 0; i--) {
    if(num >= n[i]) {
      return str[i] + intToRoman(num - n[i]);
    }
  }
  return '';
};
// @lc code=end

