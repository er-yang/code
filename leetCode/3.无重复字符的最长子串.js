/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/**
 * 
 * 类似窗口算法 
 */
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  let start = 0;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if(map[char] !== undefined && map[char] >= start) {
      start = map[char] + 1;
    }
    maxLength = Math.max(i - start + 1, maxLength);
    map[char] = i;
  }
  return maxLength;
};
// console.log(lengthOfLongestSubstring('abba'));
// @lc code=end

