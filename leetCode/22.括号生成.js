/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if(n <= 0) {
    return [];
  }
  if(n === 1) {
    return ['()'];
  }
  let result = [];
  for(let i =1; i < 2*n ; i = i + 2) {
    let left = generateParenthesis((i-1) /2);
    let right = generateParenthesis(n -((i + 1) / 2));
    if(left.length > 0) {
      for(let item of left) {
        let temp = right.length > 0 ? right.map(r => '(' + item + ')' + r) : ['(' + item + ')'];
        result.push(...temp);
      }
    }else {
      right.map(item => {result.push('()' + item)} );
    }
  }
  return result;
};

// console.log(generateParenthesis(3));
// @lc code=end

