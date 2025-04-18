/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = 0;
    let pre = 0;
    let result = '';
    while(i < a.length || i < b.length || pre) {
      if(i >= a.length) {
        a = '0' + a;
      }
      if(i >= b.length) {
        b = '0' + b;
      }
      const code1 = a.charAt(a.length - 1 - i) - '0';
      const code2 = b.charAt(b.length - 1 - i) - '0';
      sum = code1 + code2 + pre;
      pre = sum >= 2 ? 1 : 0;
      result = (sum % 2) + result;
      i++;
    }
    return result;
};
// @lc code=end

