/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s, isInterger) {
  s = s.trim();
  if(!s || /[^\de\.\+\-]/.test(s) || !/\d/.test(s)) {
    return false;
  }
  if(isInterger) {
    return /^[\+\-]?\d+$/.test(s);
  }
  if(/e/.test(s)) {
    let testStr = s.split('e');
    if(testStr.length !== 2) {
      return false;
    } else {
      return isNumber(testStr[0]) && isNumber(testStr[1], true);
    }
  }
  if(/^[\+\-]?\d*\.?\d*$/.test(s)) {
    return true;
  }
  return false;
};
// console.log('====', isNumber(' +-.9'));
// @lc code=end

