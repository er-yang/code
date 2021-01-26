/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits) {
    return [];
  }
  const map = {
    '2': ['a', 'b','c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  const result = [];
  const helper = (str, pre) => {
    if(!str) {
      result.push(pre);
      return
    }
    const num = str.charAt(0);
    const chars = map[num];
    for(let item of chars) {
      helper(str.substring(1), pre + item);
    }
  }
  helper(digits, '');
  return result;
};
// console.log(letterCombinations('23'));
// @lc code=end

