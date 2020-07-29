/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let obj = {
    '(': 0,
    '[': 1,
    '{': 2,
    ')': 3,
    ']': 4,
    '}': 5,
  };
  for(let i =0; i< s.length; i++) {
    let char = s.charAt(i);
    let index = obj[char];
    if(index < 3) {
      stack.push(char);
    } else {
      if(stack.length <=0 || obj[char]  - obj[stack.pop()] !== 3) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// @lc code=end

