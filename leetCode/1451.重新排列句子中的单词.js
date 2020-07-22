/*
 * @lc app=leetcode.cn id=1451 lang=javascript
 *
 * [1451] 重新排列句子中的单词
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
  text = text.toLowerCase();
  let textArr = text.split(' ');
  textArr.sort((a,b) => a.length - b.length);
  let newtext = textArr.join(' ');
  let result = newtext.substring(1);
  result = newtext.charAt(0).toUpperCase() + result;
  return result;
};
// @lc code=end

