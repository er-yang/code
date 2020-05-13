/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];
  let temp = [1];
  for(let i=0; i< numRows; i++) {
    result.push(temp);
    let nextTemp = [];
    for(let v = 0; v < i + 2; v ++) {
      nextTemp[v] = (temp[v - 1] || 0) + (temp[v] || 0);
    }
    temp = nextTemp;
  }
  return result;
};
// @lc code=end

