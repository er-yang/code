/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for(let i = 0; i < matrix.length / 2; i++) {
    let i2 = matrix.length - i -1;
    if(i !== i2) {
      for(let x =0; x < matrix.length; x++) {
        swap(matrix, x, i, x, i2);
      }
    }
  }
  for(let x = 0; x < matrix.length; x++) {
    for(let y =0 ; y < matrix.length - x -1; y ++) {
      let x2 = matrix.length - y - 1;
      let y2 = matrix.length - x - 1;
      swap(matrix, x, y, x2, y2);
    }
  }
  return matrix;
};
var swap = (matrix, x1, y1, x2, y2) => {
  return [matrix[x1][y1], matrix[x2][y2]] = [matrix[x2][y2], matrix[x1][y1]];
}
// @lc code=end

