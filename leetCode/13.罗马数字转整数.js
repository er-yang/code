/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if(s === '') {
    return 0
  }
  let SN = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  let res = 0;
  for(let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if(i + 1 < s.length && SN[char] < SN[s.charAt(i+1)]) {
      res += SN[s.charAt(i+1)] - SN[char];
      ++i;
    } else {
      res += SN[char];
    }
  }
  return res;
};
// @lc code=end

