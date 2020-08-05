/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var dp = [];
var numDecodings = function(s) {
  if(dp[s]) {
    return dp[s];
  }
  if(s.length < 1 || s.charAt(0) === '0' || /[3-90]0/.test(s)) {
    return 0;
  }
  if(s.length <= 1 ) {
    dp[s] = 1;
    return 1;
  }
  let endChar = s.charAt(s.length -1);
  let secChar = s.charAt(s.length - 2);
  if(secChar === '0' || (parseInt(secChar+endChar) > 26 && endChar !== '0')) {
    dp[s] = numDecodings(s.substring(0, s.length - 1))
    return dp[s];
  }
  if(endChar === '0' && parseInt(secChar+endChar) <= 26) {
    dp[s] = (numDecodings(s.substring(0, s.length - 2)) || 1);;
    return dp[s];
  }
  if(parseInt(secChar+endChar) <= 26 ) {
    dp[s] = numDecodings(s.substring(0, s.length - 1)) + (numDecodings(s.substring(0, s.length - 2)) || 1)
    return dp[s];
  } 
  dp[s] = 0;
  return dp[s];
};
// @lc code=end

