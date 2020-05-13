/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if(matrix.length <= 0 || matrix[0].length <= 0) {
    return [];
  }
  let result = []
  let sum = 0;
  let direction = 'y';
  let curIndex = {x: 0, y: 0};
  for(let i = 0; i < matrix.length * matrix[0].length; i++) {
    let {x, y} = curIndex;
    result.push(matrix[x][y]);
    let {x:nx, y:ny} = curIndex;
    if(direction === 'y') {
      nx--;
    } else {
      nx++;
    }
    if(matrix[nx] === undefined || matrix[nx][sum - nx] === undefined) {
      sum++;
      direction = direction === 'x' ? 'y' : 'x';
    }
    if(nx < 0 || nx >= matrix.length) {
      nx = x;
    }
    if(sum - nx >= matrix[nx].length) {
      nx = x + 1;
    }
    ny = sum - nx;
    curIndex = {x: nx, y: ny};
  }
  return result;
};
findDiagonalOrder([[2,3],[5,6],[8,9]])
// @lc code=end

