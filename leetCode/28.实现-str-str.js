/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {


  if(needle.length === 0) {
    return 0;
  }
  let result = -1;
  let targetLength = needle.length;
  for(let i = 0; i< haystack.length; i++) {
    if(haystack.charAt(i) === needle.charAt(0)) {
      if(haystack.length - i < targetLength) {
        return result;
      };
      let subStr = haystack.substring(i, targetLength + i);
      if(subStr === needle) {
        result = i;
        break;
      }
    }
  }
  return result;
};
// @lc code=end

