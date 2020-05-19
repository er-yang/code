/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  if(!num1 && !num2) {
    return 0;
  }
  let len1 = num1.length - 1;
  let len2 = num2.length - 1;
  let char1 = null;
  let char2 = null;
  let result = [];
  let acc = 0;
  while(len1 >= 0 || len2 >= 0) {
    char1 = parseInt(num1.charAt(len1)) || 0;
    char2 = parseInt(num2.charAt(len2)) || 0;
    let sum = char1 + char2 + acc;
    acc = Math.floor(sum / 10);
    result.push(sum % 10);
    len1--;
    len2--;
  }
  acc > 0 && result.push(acc);
  let resultStr = result.reverse().join('');
  return resultStr;
};
// @lc code=end

