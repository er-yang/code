/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let helper = (i, j) => {
    let col = i;
    while (col > 0) {
      col--;
      matrix[col][j] = matrix[col][j] === 0 ? 0 : NaN;
    }
    col = i;
    while (col < matrix.length - 1) {
      col++;
      matrix[col][j] = matrix[col][j] === 0 ? 0 : NaN;
    }
    let row = j;
    while (row > 0) {
      row--;
      matrix[i][row] = matrix[i][row] === 0 ? 0 : NaN;
    }
    row = j;
    while (row < matrix[0].length - 1) {
      row++;
      matrix[i][row] = matrix[i][row] === 0 ? 0 : NaN;
    }
  };
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const element = row[j];
      if (element === 0) {
        helper(i, j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const element = row[j];
      if (isNaN(element)) {
        matrix[i][j] = 0;
      }
    }
  }
};
// @lc code=end
