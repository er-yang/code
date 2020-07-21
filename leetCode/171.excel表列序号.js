/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  if(!s) {
    return 0;
  }
  s = s.toLowerCase();
  let result = 0;
  for(let index = 0; index < s.length; index++) {
    let num = s.charAt(index).charCodeAt() - 'a'.charCodeAt() + 1;
    result += num * Math.pow(26, s.length - index - 1);
  }
  return result;
};
// @lc code=end

