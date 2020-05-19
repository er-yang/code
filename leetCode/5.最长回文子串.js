/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s === null || s.length < 1) return "";
  let start = end = 0;
  for(let i = 0; i< s.length; i++) {
    let len1 = getLengthOfStr(i, i);
    let len2 = getLengthOfStr(i, i + 1);
    let maxLength = Math.max(len1, len2);
    if(maxLength > end - start) {
      start = i - Math.floor((maxLength - 1) / 2);
      end = i + Math.floor(maxLength / 2);
    }
  }
  function getLengthOfStr(left, right) {
    while(s.charAt(left) === s.charAt(right) && left >= 0 && right <s.length) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  return s.substring(start, end + 1);
};
longestPalindrome('cbba')
// @lc code=end

