/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let pre = 1;
  let index = digits.length - 1;
  while(pre !== 0) {
    if(index < 0) {
      digits.unshift(0);
      index = 0;
    }
    pre = digits[index] === 9 ? 1 : 0;
    digits[index] = (digits[index] + 1) % 10;
    index--;
  }
  return digits;
};
// console.log(plusOne([9]));
// @lc code=end

