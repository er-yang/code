/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let max = Math.pow(2, 31) - 1;
  let min = Math.pow(-2, 31);
  let flag = ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) && '-';
  divisor = Math.abs(divisor);
  let str = Math.abs(dividend) + '';
  if (dividend === 0 || divisor > Math.abs(dividend)) {
    return 0;
  }
  let result = '0';
  let pre = '';
  while (str.length > 0) {
    let num = parseInt(pre + str.slice(0, 1));
    str = str.slice(1);
    if (num < divisor) {
      pre = num + '';
      result += '0';
    } else {
      const [res, diff] = helper(num, divisor);
      result += res + '';
      pre = diff + '';
    }
  }
  let res = flag ? parseInt('-' + result) : parseInt(result);
  if (res > max) {
    return max;
  }
  if (res < min) {
    return min;
  }
  return res;
};
var helper = (num1, num2) => {
  let result = 0;
  while (num1 >= num2) {
    num1 = num1 - num2;
    result++;
  }
  return [result, num1];
};
// console.log( divide(1004958205, -2137325331));
// @lc code=end
