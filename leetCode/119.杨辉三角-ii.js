/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let result = [1];
  for (let i = 1; i <= rowIndex ; i++) {
    let temp = []
      for (let j = 0; j < i + 1; j++) {
        temp[j] = (result[j - 1] || 0) + (result[j] || 0 );      
      }
      result = temp;
  }
  return result;
};
// @lc code=end

